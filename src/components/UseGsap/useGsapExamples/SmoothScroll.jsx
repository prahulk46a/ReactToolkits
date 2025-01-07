import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
  // Function to check if a link is within the same page
  const getSamePageAnchor = (link) => {
    const { protocol, host, pathname, search, hash } = window.location;
    return (
      link.protocol === protocol &&
      link.host === host &&
      link.pathname === pathname &&
      link.search === search &&
      link.hash
    );
  };

  // Function to handle smooth scrolling
  const scrollToHash = (hash, e) => {
    const element = hash ? document.querySelector(hash) : null;
    if (element) {
      if (e) e.preventDefault();
      gsap.to(window, { scrollTo: element });
    }
  };

  useEffect(() => {
    // Add click event listeners to all anchor links
    const anchors = document.querySelectorAll("a[href]");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const hash = getSamePageAnchor(anchor);
        scrollToHash(hash, e);
      });
    });

    // Scroll to the element in the URL's hash on load
    scrollToHash(window.location.hash);

    // Cleanup event listeners
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", (e) => {
          const hash = getSamePageAnchor(anchor);
          scrollToHash(hash, e);
        });
      });
    };
  }, []); // Runs once on component mount

  return null; // No visual UI component
};

export default SmoothScroll;
