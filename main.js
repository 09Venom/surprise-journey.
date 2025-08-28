
let currentScene = 1;
const totalScenes = document.querySelectorAll(".scene-container").length;

function showScene(index) {
  // Hide all scenes
  document.querySelectorAll(".scene-container").forEach(s => s.classList.add("hidden"));

  // Show current scene
  const currentSceneEl = document.getElementById(`scene${index}`);
  if (currentSceneEl) {
    currentSceneEl.classList.remove("hidden");
  }

  // Controls
  const prevBtn = document.getElementById("prevBtn");
  const surpriseBtn = document.getElementById("surpriseBtn");
  const intentionBtn = document.getElementById("intentionBtn");

  // Hide all first
  prevBtn.style.display = "none";
  surpriseBtn.style.display = "none";
  intentionBtn.style.display = "none";

  // Scene-specific rules
  if (index === 1 || index === 2) {
    surpriseBtn.style.display = "inline-block";
  } else if (index === 3) {
    intentionBtn.style.display = "inline-block";
  } else if (index >= 4) {
    prevBtn.style.display = "inline-block";
  }
}

// Button actions
document.getElementById("surpriseBtn").addEventListener("click", () => {
  if (currentScene < totalScenes) {
    currentScene++;
    showScene(currentScene);
  }
});

document.getElementById("intentionBtn").addEventListener("click", () => {
  if (currentScene < totalScenes) {
    currentScene++;
    showScene(currentScene);
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentScene > 1) {
    currentScene--;
    showScene(currentScene);
  }
});

// Initialize
showScene(currentScene);
