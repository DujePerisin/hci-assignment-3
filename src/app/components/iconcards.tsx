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
        element.className = "w-full mt-8 pb-4 flex py-4 border-t border-black";
    
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

  // utils/createDynamicElement.ts
export const createDynamicElement = (
    blog: { id: number; title: string },
    container: HTMLElement
  ) => {
    // Create the card container
    const card = document.createElement("div");
    card.className =
      "border rounded-lg p-4 shadow hover:shadow-md transition";
  
    // Create the title
    const title = document.createElement("h2");
    title.textContent = blog.title;
    title.className = "font-semibold";
  
    // Create the link
    const link = document.createElement("a");
    link.href = `/blog/${blog.id}`;
    link.textContent = "Read Blog →";
    link.className = "text-blue-500 mt-2 inline-block";
  
    // Append the title and link to the card
    card.appendChild(title);
    card.appendChild(link);
  
    // Append the card to the container
    container.appendChild(card);
  };
  
  