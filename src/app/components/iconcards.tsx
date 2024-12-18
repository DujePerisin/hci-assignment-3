export function createLeftImageArticle(
    containerId: string,
    imageUrl: string,
    textContent: string
  ) {
    console.log("Accessing the iconcards.tsx file...")
    const dynamicContent = document.getElementById(containerId);
  
    if (dynamicContent) {
      // Create a wrapper div
      const element = document.createElement("div");
      element.className = "w-full mt-8 border-b pb-4 flex";
  
      // Create the 70% image section
      const imageDiv = document.createElement("div");
      imageDiv.className = "w-7/10";
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Dynamic Image";
      img.className = "w-full h-auto object-cover";
      imageDiv.appendChild(img);
  
      // Create the 30% text section
      const textDiv = document.createElement("div");
      textDiv.className =
        "w-3/10 flex items-center justify-center text-center p-4";
      const text = document.createElement("p");
      text.textContent = textContent;
      text.className = "text-gray-800 text-lg font-medium";
      textDiv.appendChild(text);
  
      // Append image and text divs to the wrapper
      element.appendChild(textDiv);
      element.appendChild(imageDiv);
  
      // Append the wrapper to the dynamic content area
      dynamicContent.appendChild(element);
    }
  }
  