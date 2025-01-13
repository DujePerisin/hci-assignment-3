// export function createImageArticle1(
//     containerId: string,
//     imageUrl: string,
//     textContent: string,
//     layoutConfig: "imageLeft" | "imageRight" = "imageLeft" // Default to "imageLeft"
//   ) {
//     console.log("Accessing the iconcards.tsx file...")
//     const dynamicContent = document.getElementById(containerId);
  
//     if (dynamicContent) {
//         const element = document.createElement("div");
//         element.className = "w-full mt-8 pb-4 flex py-4 border-t border-black";
    
//         // Create the image div
//         const imageDiv = document.createElement("div");
//         imageDiv.className = "flex-[7]"; // Ensure this takes exactly 70% of the width
    
//         const img = document.createElement("img");
//         img.src = imageUrl;
//         img.alt = "Dynamic Image";
//         img.className = "w-full h-auto object-cover";
//         imageDiv.appendChild(img);
    
//         // Create the text div
//         const textDiv = document.createElement("div");
//         textDiv.className =
//           "flex-[3] flex items-center justify-center text-center p-4"; // Ensure this takes exactly 30% of the width
    
//         const text = document.createElement("p");
//         text.textContent = textContent;
//         text.className = "text-gray-800 text-lg font-medium";
//         textDiv.appendChild(text);
  
//       // Append elements based on layout
//     if (layoutConfig === "imageLeft") {
//         element.appendChild(imageDiv); 
//         element.appendChild(textDiv); 
//       } else if (layoutConfig === "imageRight") {
//         element.appendChild(textDiv); 
//         element.appendChild(imageDiv); 
//       }
  
//       // Append the wrapper to the dynamic content area
//       dynamicContent.appendChild(element);
//     }
//   }

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
  
  export function createImageArticle1(
    containerId: string,
    imageUrl: string,
    textContent: string,
    layoutConfig: "imageLeft" | "imageRight" = "imageLeft"
  ) {
    console.log("Accessing the iconcards.tsx file...");
    const dynamicContent = document.getElementById(containerId);
  
    if (dynamicContent) {
      const element = document.createElement("section");
  
      // Parent container styling with background gradient
      element.className =
        "relative flex flex-col md:flex-row items-center gap-6 mt-10 pb-6 pt-8 shadow-lg bg-gradient-to-r from-gray-100 to-white";
  
      // Create the image div
      const imageDiv = document.createElement("div");
      imageDiv.className =
        "w-full md:w-[50%] lg:w-[55%] xl:w-[60%] flex-shrink-0 flex justify-center transition-transform duration-300";
  
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Dynamic Image";
      img.className =
        "rounded-lg shadow-md object-cover max-h-60 md:max-h-72 lg:max-h-[360px] xl:max-h-[420px] w-full";
      imageDiv.appendChild(img);
  
      // Create the text div
      const textDiv = document.createElement("div");
      textDiv.className =
        "w-full md:w-[50%] lg:w-[45%] xl:w-[40%] flex flex-col justify-center text-center md:text-left p-6 rounded-lg";
  
      const text = document.createElement("p");
      text.textContent = textContent;
      text.className =
        "text-gray-800 text-base md:text-lg lg:text-xl font-light leading-relaxed";
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
  
  export function createImageArticle2(
    containerId: string,
    imageUrl: string,
    textContent: string,
    layoutConfig: "imageLeft" | "imageRight" = "imageLeft" // Default to "imageLeft"
  ) {
    console.log("Accessing createImageArticle2...");
  
    const dynamicContent = document.getElementById(containerId);
  
    if (dynamicContent) {
      const element = document.createElement("div");
      element.className = "relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]";
  
      // Full-width image
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Full width image";
      img.className = "absolute inset-0 w-full h-full object-cover";
  
      // Text overlay container
      const textDiv = document.createElement("div");
      textDiv.className = `
        absolute top-0 h-full flex items-center p-6 md:p-10
        ${layoutConfig === "imageLeft" ? "left-0" : "right-0"}
        text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug
        bg-gradient-to-${layoutConfig === "imageLeft" ? "r" : "l"} from-black/60 via-black/30 to-transparent
      `;
  
      // Text content
      const text = document.createElement("p");
      text.textContent = textContent;
      text.className = "z-10 max-w-md";
  
      textDiv.appendChild(text);
      element.appendChild(img);
      element.appendChild(textDiv);
      dynamicContent.appendChild(element);
    }
  }
  