(function () {
  "use strict";
  var headerNode = document.querySelector(".mdk-header");
  var layoutNode = document.querySelector(".mdk-header-layout");
  var componentNode = layoutNode ? layoutNode : headerNode;
  componentNode.addEventListener("domfactory-component-upgraded", function () {
    headerNode.mdkHeader.eventTarget.addEventListener("scroll", function () {
      var progress = headerNode.mdkHeader.getScrollState().progress;
      var navbarNode = headerNode.querySelector("#default-navbar");
      navbarNode.classList.toggle("bg-transparent", progress <= 0.2);
    });
  });
})();
