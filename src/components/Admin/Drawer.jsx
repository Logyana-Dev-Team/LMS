import React from "react";

export default function Drawer() {
  return (
    <div class="mdk-drawer js-mdk-drawer" id="default-drawer">
      <div class="mdk-drawer__content">
        <div
          class="sidebar sidebar-dark-pickled-bluewood sidebar-left"
          data-perfect-scrollbar
        >
          <div class="sidebar-heading">Admin Dashborad</div>
          <ul class="sidebar-menu">
            <li class="sidebar-menu-item">
              <a
                class="sidebar-menu-button"
                data-toggle="collapse"
                href="#productivity_menu"
              >
                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  access_time
                </span>
                Topics
                <span class="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                class="sidebar-submenu collapse sm-indent"
                id="productivity_menu"
              >
                <li class="sidebar-menu-item">
                  <a class="sidebar-menu-button" href="/topicList">
                    <span class="sidebar-menu-text">List Topics</span>
                  </a>
                </li>
                <li class="sidebar-menu-item">
                  <a class="sidebar-menu-button" href="/addTopic">
                    <span class="sidebar-menu-text">Add Topic</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-item">
              <a
                class="sidebar-menu-button js-sidebar-collapse"
                data-toggle="collapse"
                href="#enterprise_menu"
              >
                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  donut_large
                </span>
                Module
                <span class="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                class="sidebar-submenu collapse sm-indent"
                id="enterprise_menu"
              >
                <li class="sidebar-menu-item">
                  <a class="sidebar-menu-button" href="/moduleList">
                    <span class="sidebar-menu-text">List Module</span>
                  </a>
                </li>
                <li class="sidebar-menu-item">
                  <a class="sidebar-menu-button" href="/addModule">
                    <span class="sidebar-menu-text">Add Module</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-item">
              <a
                class="sidebar-menu-button"
                data-toggle="collapse"
                href="#ecommerce_menu"
              >
                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  shopping_cart
                </span>
                Chapter
                <span class="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                class="sidebar-submenu collapse sm-indent"
                id="ecommerce_menu"
              >
                <li class="sidebar-menu-item">
                  <a class="sidebar-menu-button" href="/addChapter">
                    <span class="sidebar-menu-text">Add Chapter</span>
                  </a>
                </li>
                <li class="sidebar-menu-item">
                  <a class="sidebar-menu-button" href="/editChapter">
                    <span class="sidebar-menu-text">Edit Chapter</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
