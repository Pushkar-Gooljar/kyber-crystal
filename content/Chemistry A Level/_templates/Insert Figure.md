<%*
// --- Configuration ---
const LOCAL_IMAGE_PATH = '../../assets/images/';

// --- Logic ---

// 1. Ask the user to choose between a local or web image
const options = ["Local Image (from assets)", "Web URL"];
const values = ["local", "web"];
const imageType = await tp.system.suggester(
  options, 
  values, 
  false, // This being false means the prompt won't throw an error on cancel
  "What type of image are you adding?"
);

// Exit if the user cancelled the first prompt
if (!imageType) {
  new Notice("Template cancelled.");
  return;
}

let url = "";

// 2. Prompt for the URL based on the user's choice
if (imageType === "local") {
  const filename = await tp.system.prompt("Image Filename (e.g., my-photo.png)");
  if (!filename) {
    new Notice("Template cancelled.");
    return;
  }
  url = LOCAL_IMAGE_PATH + filename;
} else { // imageType must be "web"
  const webUrl = await tp.system.prompt("Full Image URL");
  if (!webUrl) {
    new Notice("Template cancelled.");
    return;
  }
  url = webUrl;
}

// 3. Prompt for the remaining details
const height = await tp.system.prompt("Image Height (e.g., 300px)", "300px");
// We check for null in case the user cancels these subsequent prompts
if (height === null) { 
    new Notice("Template cancelled.");
    return;
}

const caption = await tp.system.prompt("Caption", "");
if (caption === null) {
    new Notice("Template cancelled.");
    return;
}

// 4. Generate the final HTML
tR += `<figure><div class="sme-img-ctn cc"><img src="${url}" style="height:${height};"></div><figcaption>${caption}</figcaption></figure>`;
%>