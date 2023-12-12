export default function serviceWorker() {
  // Update the swUrl with the correct path to your service worker file on your live site
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`; // Change this according to your service worker path

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(swUrl).then(
        (registration) => {
          console.log(
            "Service worker registration succeeded:",
            registration.scope
          );
        },
        (error) => {
          console.error(`Service worker registration failed: ${error}`);
        }
      );
    });
  } else {
    console.error("Service workers are not supported.");
  }
}
