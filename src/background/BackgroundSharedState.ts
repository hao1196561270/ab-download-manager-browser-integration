import {getLatestConfig} from "~/configs/Config";


let holdingKey = ""

export function setHoldingKey(key: string) {
    holdingKey = key
}

export function isBypassShortcutPressed() {
    // When auto-capture of download links is enabled, holding down the shortcut key
    // and clicking on the download link uses the internal browser download method.
    return holdingKey === getLatestConfig().bypassShortcut
}

// Suspend mode: when enabled, the extension stops intercepting downloads so the
// browser's native download manager takes over. Toggled by the suspend shortcut
// (default right Shift) and automatically disabled when a download completes.
let suspendMode = false
const suspendModeListeners = new Set<(value: boolean) => void>()

export function isSuspendMode(): boolean {
    return suspendMode
}

export function setSuspendMode(value: boolean) {
    if (suspendMode === value) return
    suspendMode = value
    suspendModeListeners.forEach((l) => l(value))
}

export function onSuspendModeChanged(listener: (value: boolean) => void): () => void {
    suspendModeListeners.add(listener)
    return () => suspendModeListeners.delete(listener)
}
