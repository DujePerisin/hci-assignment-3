export function createImageArticle1(
    containerId: string,
    imageUrl: string,
    textContent: string,
    layoutConfig: "imageLeft" | "imageRight" = "imageLeft" // Default to "imageLeft"
  ) {
    console.log("Accessing the iconcards.tsx file...")
    const dynamicContent = document.getElementById(containerId);
  
    if (dynamicContent) {
        const element = document.createElement("div");
        element.className = "w-full mt-8 border-b pb-4 flex";
    
        // Create the image div
        const imageDiv = document.createElement("div");
        imageDiv.className = "flex-[7]"; // Ensure this takes exactly 70% of the width
    
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Dynamic Image";
        img.className = "w-full h-auto object-cover";
        imageDiv.appendChild(img);
    
        // Create the text div
        const textDiv = document.createElement("div");
        textDiv.className =
          "flex-[3] flex items-center justify-center text-center p-4"; // Ensure this takes exactly 30% of the width
    
        const text = document.createElement("p");
        text.textContent = textContent;
        text.className = "text-gray-800 text-lg font-medium";
        textDiv.appendChild(text);
  
      // Append elements based on layout
    if (layoutConfig === "imageLeft") {
        element.appendChild(imageDiv); 
        element.appendChild(textDiv); 
      } else if (layoutConfig === "imageRight") {
        element.appendChild(textDiv); 
        element.appendChild(imageDiv); 
      }
  
      // Append the wrapper to the dynamic content area
      dynamicContent.appendChild(element);
    }
  }
  