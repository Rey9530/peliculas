import React from "react";

function SideBar(props) {
  return (
    <>
      <div className="sidebar-wrapper sidebar-theme">
        <nav id="sidebar">
          <div className="navbar-nav theme-brand flex-row  text-center">
            <div className="nav-logo">
              <div className="nav-item theme-logo">
                <a href="./index.html">
                  <img
                    src="/assets/img/logo.svg"
                    className="navbar-logo"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="nav-item theme-text">
                <a href="./index.html" className="nav-link">
                  {" "}
                  CORK{" "}
                </a>
              </div>
            </div>
            <div className="nav-item sidebar-toggle">
              <div className="btn-toggle sidebarCollapse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevrons-left"
                >
                  <polyline points="11 17 6 12 11 7"></polyline>
                  <polyline points="18 17 13 12 18 7"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="shadow-bottom"></div>
          <ul className="list-unstyled menu-categories" id="accordionExample">
            <li className="menu">
              <a
                href="#dashboard"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="dashboard"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./index.html"> Analytics </a>
                </li>
                <li>
                  <a href="./index2.html"> Sales </a>
                </li>
              </ul>
            </li>

            <li className="menu menu-heading">
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-minus"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>APPLICATIONS</span>
              </div>
            </li>

            <li className="menu">
              <a
                href="#apps"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-cpu"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                  <span>Apps</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="apps"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./app-calendar.html"> Calendar </a>
                </li>
                <li>
                  <a href="./app-chat.html"> Chat </a>
                </li>
                <li>
                  <a href="./app-mailbox.html"> Mailbox </a>
                </li>
                <li>
                  <a href="./app-todoList.html"> Todo List </a>
                </li>
                <li>
                  <a href="./app-notes.html"> Notes </a>
                </li>
                <li>
                  <a href="./app-scrumboard.html"> Scrumboard </a>
                </li>
                <li>
                  <a href="./app-contacts.html"> Contacts </a>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#invoice"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    Invoice{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="invoice"
                  >
                    <li>
                      <a href="./app-invoice-list.html"> List </a>
                    </li>
                    <li>
                      <a href="./app-invoice-preview.html"> Preview </a>
                    </li>
                    <li>
                      <a href="./app-invoice-add.html"> Add </a>
                    </li>
                    <li>
                      <a href="./app-invoice-edit.html"> Edit </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#ecommerce"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    Ecommerce{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="ecommerce"
                    data-bs-parent="#apps"
                  >
                    <li>
                      <a href="./app-ecommerce-product-shop.html"> Shop </a>
                    </li>
                    <li>
                      <a href="./app-ecommerce-product.html"> Product </a>
                    </li>
                    <li>
                      <a href="./app-ecommerce-product-list.html"> List </a>
                    </li>
                    <li>
                      <a href="./app-ecommerce-product-add.html"> Create </a>
                    </li>
                    <li>
                      <a href="./app-ecommerce-product-edit.html"> Edit </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#blog"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    Blog{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="blog"
                    data-bs-parent="#apps"
                  >
                    <li>
                      <a href="./app-blog-grid.html"> Grid </a>
                    </li>
                    <li>
                      <a href="./app-blog-list.html"> List </a>
                    </li>
                    <li>
                      <a href="./app-blog-post.html"> Post </a>
                    </li>
                    <li>
                      <a href="./app-blog-create.html"> Create </a>
                    </li>
                    <li>
                      <a href="./app-blog-edit.html"> Edit </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="menu menu-heading">
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-minus"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>USER INTERFACE</span>
              </div>
            </li>

            <li className="menu">
              <a
                href="#components"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-box"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span>Components</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="components"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./component-tabs.html"> Tabs </a>
                </li>
                <li>
                  <a href="./component-accordion.html"> Accordions </a>
                </li>
                <li>
                  <a href="./component-modal.html"> Modals </a>
                </li>
                <li>
                  <a href="./component-cards.html"> Cards </a>
                </li>
                <li>
                  <a href="./component-bootstrap-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="./component-splide.html">Splide</a>
                </li>
                <li>
                  <a href="./component-sweetalert.html"> Sweet Alerts </a>
                </li>
                <li>
                  <a href="./component-timeline.html"> Timeline </a>
                </li>
                <li>
                  <a href="./component-notifications.html"> Notifications </a>
                </li>
                <li>
                  <a href="./component-media-object.html"> Media Object </a>
                </li>
                <li>
                  <a href="./component-list-group.html"> List Group </a>
                </li>
                <li>
                  <a href="./component-pricing-table.html"> Pricing Tables </a>
                </li>
                <li>
                  <a href="./component-lightbox.html"> Lightbox </a>
                </li>
                <li>
                  <a href="./component-drag-drop.html"> Drag and Drop </a>
                </li>
                <li>
                  <a href="./component-fonticons.html"> Font Icons </a>
                </li>
                <li>
                  <a href="./component-flags.html"> Flag Icons </a>
                </li>
              </ul>
            </li>

            <li className="menu">
              <a
                href="#elements"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-zap"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span>Elements</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="elements"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./element-alerts.html"> Alerts </a>
                </li>
                <li>
                  <a href="./element-avatar.html"> Avatar </a>
                </li>
                <li>
                  <a href="./element-badges.html"> Badges </a>
                </li>
                <li>
                  <a href="./element-breadcrumbs.html"> Breadcrumbs </a>
                </li>
                <li>
                  <a href="./element-buttons.html"> Buttons </a>
                </li>
                <li>
                  <a href="./element-buttons-group.html"> Button Groups </a>
                </li>
                <li>
                  <a href="./element-color-library.html"> Color Library </a>
                </li>
                <li>
                  <a href="./element-dropdown.html"> Dropdown </a>
                </li>
                <li>
                  <a href="./element-infobox.html"> Infobox </a>
                </li>
                <li>
                  <a href="./element-loader.html"> Loader </a>
                </li>
                <li>
                  <a href="./element-pagination.html"> Pagination </a>
                </li>
                <li>
                  <a href="./element-popovers.html"> Popovers </a>
                </li>
                <li>
                  <a href="./element-progressbar.html"> Progress Bar </a>
                </li>
                <li>
                  <a href="./element-search.html"> Search </a>
                </li>
                <li>
                  <a href="./element-tooltips.html"> Tooltips </a>
                </li>
                <li>
                  <a href="./element-treeview.html"> Treeview </a>
                </li>
                <li>
                  <a href="./element-typography.html"> Typography </a>
                </li>
              </ul>
            </li>

            <li className="menu menu-heading">
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-minus"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>TABLES AND FORMS</span>
              </div>
            </li>

            <li className="menu">
              <a
                href="#tables"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-layers"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  <span>Tables</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="tables"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./table-basic.html"> Tables </a>
                </li>

                <li className="sub-submenu dropend">
                  <a
                    href="#datatable"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    {" "}
                    Datatable{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="datatable"
                    data-bs-parent="#tables"
                  >
                    <li>
                      <a href="./table-datatable-basic.html"> Basic </a>
                    </li>
                    <li>
                      <a href="./table-datatable-striped-table.html">
                        {" "}
                        Striped{" "}
                      </a>
                    </li>
                    <li>
                      <a href="./table-datatable-custom.html"> Custom </a>
                    </li>
                    <li>
                      <a href="./table-datatable-miscellaneous.html">
                        {" "}
                        Miscellaneous{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="menu">
              <a
                href="#forms"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-clipboard"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                  <span>Forms</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="forms"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./form-bootstrap-basic.html"> Basic </a>
                </li>
                <li>
                  <a href="./form-input-group-basic.html"> Input Group </a>
                </li>
                <li>
                  <a href="./form-layouts.html"> Layouts </a>
                </li>
                <li>
                  <a href="./form-validation.html"> Validation </a>
                </li>
                <li>
                  <a href="./form-input-mask.html"> Input Mask </a>
                </li>
                <li>
                  <a href="./form-tom-select.html"> Tom Select </a>
                </li>
                <li>
                  <a href="./form-tagify.html"> Tagify </a>
                </li>
                <li>
                  <a href="./form-bootstrap-touchspin.html"> TouchSpin </a>
                </li>
                <li>
                  <a href="./form-maxlength.html"> Maxlength </a>
                </li>
                <li>
                  <a href="./form-checkbox.html"> Checkbox </a>
                </li>
                <li>
                  <a href="./form-radio.html"> Radio </a>
                </li>
                <li>
                  <a href="./form-switches.html"> Switches </a>
                </li>
                <li>
                  <a href="./form-wizard.html"> Wizards </a>
                </li>
                <li>
                  <a href="./form-fileupload.html"> File Upload </a>
                </li>
                <li>
                  <a href="./form-quill.html"> Quill Editor </a>
                </li>
                <li>
                  <a href="./form-markdown.html"> Markdown Editor </a>
                </li>
                <li>
                  <a href="./form-date-time-picker.html"> Date Time Picker </a>
                </li>
                <li>
                  <a href="./form-slider.html"> Slider </a>
                </li>
                <li>
                  <a href="./form-clipboard.html"> Clipboard </a>
                </li>
                <li>
                  <a href="./form-autoComplete.html"> Auto Complete </a>
                </li>
              </ul>
            </li>

            <li className="menu">
              <a
                href="#pages"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-file"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                  <span>Pages</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="pages"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./pages-knowledge-base.html"> Knowledge Base </a>
                </li>
                <li>
                  <a href="./pages-faq.html"> FAQ </a>
                </li>
                <li>
                  <a href="./pages-contact-us.html"> Contact Form </a>
                </li>
                <li>
                  <a href="./user-profile.html"> Users </a>
                </li>
                <li>
                  <a href="./user-account-settings.html"> Account Settings </a>
                </li>
                <li>
                  <a href="./pages-error404.html" target="_blank">
                    {" "}
                    Error{" "}
                  </a>
                </li>
                <li>
                  <a href="./pages-maintenence.html" target="_blank">
                    {" "}
                    Maintanence{" "}
                  </a>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#login"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    {" "}
                    Sign In{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="login"
                    data-bs-parent="#pages"
                  >
                    <li>
                      <a target="_blank" href="./auth-boxed-signin.html">
                        {" "}
                        Boxed{" "}
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="./auth-cover-signin.html">
                        {" "}
                        Cover{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#signup"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    {" "}
                    Sign Up{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="signup"
                    data-bs-parent="#pages"
                  >
                    <li>
                      <a target="_blank" href="./auth-boxed-signup.html">
                        {" "}
                        Boxed{" "}
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="./auth-cover-signup.html">
                        {" "}
                        Cover{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#unlock"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    {" "}
                    Unlock{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="unlock"
                    data-bs-parent="#pages"
                  >
                    <li>
                      <a target="_blank" href="./auth-boxed-lockscreen.html">
                        {" "}
                        Boxed{" "}
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="./auth-cover-lockscreen.html">
                        {" "}
                        Cover{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#reset"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    {" "}
                    Reset{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="reset"
                    data-bs-parent="#pages"
                  >
                    <li>
                      <a
                        target="_blank"
                        href="./auth-boxed-password-reset.html"
                      >
                        {" "}
                        Boxed{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="./auth-cover-password-reset.html"
                      >
                        {" "}
                        Cover{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-submenu dropend">
                  <a
                    href="#twoStep"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    {" "}
                    Two Step{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="twoStep"
                    data-bs-parent="#pages"
                  >
                    <li>
                      <a
                        target="_blank"
                        href="./auth-boxed-2-step-verification.html"
                      >
                        {" "}
                        Boxed{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="./auth-cover-2-step-verification.html"
                      >
                        {" "}
                        Cover{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="menu active">
              <a
                href="#more"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <span>More</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                className="dropdown-menu submenu list-unstyled"
                id="more"
                data-bs-parent="#accordionExample"
              >
                <li>
                  <a href="./map-leaflet.html"> Maps </a>
                </li>
                <li>
                  <a href="./charts-apex.html"> Charts </a>
                </li>
                <li>
                  <a href="./widgets.html"> Widgets </a>
                </li>
                <li className="sub-submenu dropend active">
                  <a
                    href="#layouts"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    className="dropdown-toggle collapsed"
                  >
                    {" "}
                    Layouts{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                  <ul
                    className="dropdown-menu list-unstyled sub-submenu"
                    id="layouts"
                    data-bs-parent="#more"
                  >
                    <li>
                      <a href="./layout-blank-page.html"> Blank Page </a>
                    </li>
                    <li className="active">
                      <a href="./layout-empty.html"> Empty Page </a>
                    </li>
                    <li>
                      <a href="./layout-full-width.html"> Full Width </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a target="_blank" href="../../documentation/index.html">
                    {" "}
                    Documentation{" "}
                  </a>
                </li>
                <li>
                  <a target="_blank" href="../../documentation/changelog.html">
                    {" "}
                    Changelog{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
