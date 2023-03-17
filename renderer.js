/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const NOTIFICATION_TITLE = 'Coucou'
const NOTIFICATION_BODY = 'Tu pues la merde'
const CLICK_MESSAGE = 'Compression'

const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')

btn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile()
  filePathElement.innerText = filePath
})

document.getElementById("compr").addEventListener("click", () => {
  document.getElementById("compr").innerText = CLICK_MESSAGE;
});

document.getElementById("compr").addEventListener("click", () => {
  execFile(pngquant, ['-o', 'output.png', 'input.png'], error => {
	console.log('Image minified!');
});
});

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("compr").innerText = CLICK_MESSAGE

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})