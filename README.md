<a href="https://addons.mozilla.org/en-US/firefox/addon/ab-download-manager/"><img src="https://img.shields.io/amo/v/ab-download-manager?label=Firefox&logo=firefoxbrowser" alt="Firefox Add-ons Version"></a>
<a href="https://chromewebstore.google.com/detail/bbobopahenonfdgjgaleledndnnfhooj"> <img src="https://img.shields.io/chrome-web-store/v/bbobopahenonfdgjgaleledndnnfhooj?label=Chrome&logo=googlechrome" alt="Chrome Web Store Version"></a>

# AB Download Manager 浏览器集成仓库

> 如果你正在寻找主应用程序仓库，请使用[此链接](https://github.com/amir1376/ab-download-manager)。

## 使用

要使用本扩展，你需要先[安装](https://abdownloadmanager.com/#download) AB Download Manager。

### 本扩展的功能如下

- 在浏览器的右键菜单中添加「使用 AB DM 下载」选项
- 当用户想从浏览器下载文件时，自动捕获下载链接
- 当用户选中页面中包含链接的某段内容时，显示「下载选中项」弹窗

## 如何构建

若要在本地构建本扩展：

> 我在 `Windows` 上使用 `npm` 进行开发，但在其他构建环境中应能得到相同的结果。

```bash
# 安装依赖
npm i

# 构建 Firefox 版本
npm run pack:firefox
# 构建 Chrome 版本
npm run pack:chrome
```

包含扩展的压缩包将输出到 `./dist/<browser_name>.zip`。

## 仓库与源代码

与 **AB Download Manager** 项目相关的仓库有多个：

| 仓库                                                                                                       | 说明                                                                     |
|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [主应用程序](https://github.com/amir1376/ab-download-manager)                                              | 包含运行在你的**设备**上的 **应用程序**                                   |
| [浏览器集成](https://github.com/amir1376/ab-download-manager-browser-integration)（你当前所在位置）         | 包含需要安装到你的**浏览器**中的 **浏览器扩展**                           |
| [网站](https://github.com/amir1376/ab-download-manager-website)                                            | 包含 **AB Download Manager** 的[网站](https://abdownloadmanager.com)      |

我花费了大量时间来创建这个项目。

如果作者的的作品，请考虑给原作者一个 ⭐。
谢谢 ❤️
