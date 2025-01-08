const { app, BrowserWindow } = require("electron");
const path = require("path");
const serve = require("serve-handler");
const http = require("http");

let mainWindow;

const server = http.createServer((req, res) => {
  return serve(req, res, {
    public: path.join(__dirname, "out"),
  });
});

app.on("ready", () => {
  // برای حالت توسعه
  // mainWindow = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  //   webPreferences: {
  //     // preload: path.join(__dirname, "preload.js"),
  //     nodeIntegration: false,
  //     contextIsolation: true,
  //   },
  // });
  // mainWindow.loadURL("http://localhost:3000");
  // // mainWindow.loadFile(path.join(__dirname, "out", "index.html"));

  // mainWindow.on("closed", () => {
  //   mainWindow = null;
  // });

  // یا برای حالت تولید:
  server.listen(3000, () => {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    });

    mainWindow.loadURL("http://localhost:3000");
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
