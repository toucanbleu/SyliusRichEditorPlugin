/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ "./node_modules/dragula/dragula.js");
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tingle.js */ "./node_modules/tingle.js/dist/tingle.min.js");
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tingle_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pell */ "./node_modules/pell/dist/pell.min.js");
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pell__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * Class to manage Rich editor fields with UI Elements
 */

var MbizRichEditorFields = /*#__PURE__*/function () {
  /**
   * Constructor for MbizRichEditorFields, see config in `src/Resources/views/Admin/app.html.twig`
   * @param config
   */
  function MbizRichEditorFields(config) {
    _classCallCheck(this, MbizRichEditorFields);

    // Configuration of plugin
    this.config = config;
    this.templateRender = this.config.templateRender;
    this.debug = this.config.debug;
    this.targets = document.querySelectorAll(config.querySelector);
    this.container = document.querySelector(config.containerSelector);
    this.uiElements = this.config.uiElements;
    this.translations = this.config.translations;
    this.errorsTranslations = this.config.errorsTranslations;
    this.formRoute = this.config.formRoute;
    this.submitRoute = this.config.submitRoute;

    if (this.debug) {
      this.log('Plugin configuration:', this.config);
      this.log('Matched element(s):', this.targets.length);
    } // Internal attributes


    this.id = {
      uiElementsContainer: 'mbiz-rich-editor-elements-container',
      uiElementsContainerInner: 'mbiz-rich-editor-elements-container-inner',
      uiElementsContent: 'mbiz-rich-editor-elements-content'
    };
    this.classes = {
      uiElementList: 'mbiz-rich-editor-component-ui-elements',
      dropableContainer: 'mbiz-rich-editor-dropable-container',
      dropableContainerInner: 'mbiz-rich-editor-dropable-container-inner',
      draggableContainer: 'mbiz-rich-editor-draggable-container',
      draggableItem: 'mbiz-rich-editor-draggable-item',
      draggableItemHandler: 'mbiz-rich-editor-draggable-item-handler',
      draggableItemInner: 'mbiz-rich-editor-draggable-item-inner',
      draggableItemImg: 'mbiz-rich-editor-draggable-item-img',
      draggableItemContent: 'mbiz-rich-editor-draggable-item-content',
      draggableItemInfos: 'mbiz-rich-editor-draggable-item-infos',
      draggableItemTitle: 'mbiz-rich-editor-draggable-item-title',
      draggableItemActions: 'mbiz-rich-editor-draggable-item-actions',
      draggableItemButton: 'mbiz-rich-editor-draggable-item-button',
      deleteButton: 'mbiz-rich-editor-delete-button',
      updateButton: 'mbiz-rich-editor-update-button',
      toggleButton: 'mbiz-rich-editor-toggle-button',
      closeButton: 'mbiz-rich-editor-close-button',
      renderedModal: 'mbiz-rich-editor-rendred-modal'
    };
    this.events = {
      uiElementsBuilt: new Event('uiElementsBuilt'),
      updateElement: function updateElement(modal) {
        return new CustomEvent('updateElement', {
          'detail': modal
        });
      }
    };
  }
  /**
   * Init each Rich Editor element
   */


  _createClass(MbizRichEditorFields, [{
    key: "init",
    value: function init() {
      // Init only if we match at least one target
      if (this.targets.length) {
        var _self = this; // Init fields only when UI Elements are built


        this.container.addEventListener('uiElementsBuilt', function (e) {
          _self.log('Ui Elements container is built', e);

          _self.initFields();

          _self.toggleUiElementsVisibility();
        });
        this.initUiElements(this.container, this.uiElements);
      }
    }
    /**
     * Init the UI Elements area
     *
     * @param target
     * @param uiElements
     */

  }, {
    key: "initUiElements",
    value: function initUiElements(target, uiElements) {
      this.log('Init UI Elements:', uiElements); // Init container

      var uiElementsContainer = document.createElement('div');
      uiElementsContainer.id = this.id.uiElementsContainer;
      uiElementsContainer.classList.add(this.classes.dropableContainer, this.classes.uiElementList); // Init close container button

      var uiElementsContainerClose = "<button type=\"button\" class=\"".concat(this.classes.closeButton, " ").concat(this.classes.toggleButton, "\">").concat(this.translations.close, "</button>");
      uiElementsContainer.insertAdjacentHTML('beforeend', uiElementsContainerClose); // Init container inner

      var uiElementsContainerInner = document.createElement('div');
      uiElementsContainerInner.id = this.id.uiElementsContainerInner;
      uiElementsContainerInner.classList.add(this.classes.dropableContainerInner);
      uiElementsContainer.appendChild(uiElementsContainerInner); // Loop on UI Elements

      var error = false;

      for (var type in uiElements) {
        var uiElement = uiElements[type];
        this.log('Init UI Element:', uiElement);
        var renderedUiElement = this.renderUiElementMetaData(type, uiElement, this.templateRender);

        if (renderedUiElement === '') {
          error = true;
          continue;
        }

        uiElementsContainerInner.insertAdjacentHTML('beforeend', renderedUiElement);
      } // Append generated HTML to display current UI Elements of target


      if (!error) {
        target.insertBefore(uiElementsContainer, target.firstChild);
        this.container.dispatchEvent(this.events.uiElementsBuilt);
      }
    }
    /**
     * Init each Rich Editor fields
     */

  }, {
    key: "initFields",
    value: function initFields() {
      var _iterator = _createForOfIteratorHelper(this.targets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var target = _step.value;
          var content = target.value;

          if (!content) {
            content = '[]';
          }

          this.log('Target\'s content:', content);
          var jsonContent = void 0;

          try {
            jsonContent = JSON.parse(content);
          } catch (e) {
            this.error('Unable to parse the Rich Content JSON for this content : ', content, this.errorsTranslations.cannotParseJson, true);
            continue;
          }

          this.initField(target, jsonContent);
          this.initActions(target, jsonContent);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Init the field depending on it's parsed content
     *
     * @param target
     * @param jsonContent [{type: "UI Element Type", fields: {}}]
     */

  }, {
    key: "initField",
    value: function initField(target, jsonContent) {
      this.log('Init field with parsed content:', jsonContent); // Hide original input

      target.setAttribute('hidden', 'true'); // Init container

      var elementsContainer = document.createElement('div');
      elementsContainer.id = this.id.uiElementsContent;
      elementsContainer.classList.add(this.classes.draggableContainer, this.classes.uiElementList);
      elementsContainer.dataset.placeholder = this.translations.placeholder; // Loop on UI Elements

      var error = false;

      var _iterator2 = _createForOfIteratorHelper(jsonContent),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var uiElement = _step2.value;
          // Retrieve the Ui Element type
          this.log('Init UI Element:', uiElement);

          if (typeof this.uiElements[uiElement.type] === 'undefined') {
            error = true;
            this.error('Cannot find element of type ', uiElement.type, this.errorsTranslations.cannotFindType);
            continue;
          } // Render Ui Element meta data


          var uiElementMetaData = this.uiElements[uiElement.type];
          this.log('Matched Ui Element with meta data:', uiElementMetaData);
          var renderedUiElementMetaData = this.renderUiElementMetaData(uiElement.type, uiElementMetaData, this.templateRender);

          if (renderedUiElementMetaData === '') {
            error = true;
            continue;
          } // Add rendered Ui Element meta data in container


          this.log('Rendered Ui Element meta data:', renderedUiElementMetaData);
          elementsContainer.insertAdjacentHTML('beforeend', renderedUiElementMetaData);
        } // Add actions buttons before target

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      target.insertAdjacentHTML('beforebegin', this.renderActionsButtons(this.templateRender)); // Append generated HTML to display current UI Elements of target

      if (!error) {
        target.parentNode.appendChild(elementsContainer);
        var reorder = this.initReorder(document.querySelector('#' + this.id.uiElementsContainer + '> div'), elementsContainer);
        this.initReorderEvent(reorder, target, jsonContent);
      }
    }
    /**
     * Toggle visibility of the ui elements
     */

  }, {
    key: "toggleUiElementsVisibility",
    value: function toggleUiElementsVisibility() {
      var _this = this;

      var toggleButtons = document.querySelectorAll('.' + this.classes.toggleButton);

      var _iterator3 = _createForOfIteratorHelper(toggleButtons),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var toggleButton = _step3.value;
          toggleButton.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#' + _this.id.uiElementsContainer).classList.toggle('is-expanded');
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * Init action for each element, current actions are update and delete
     *
     * @param target
     * @param jsonContent
     */

  }, {
    key: "initActions",
    value: function initActions(target, jsonContent) {
      // Init Delete
      var deleteButtons = target.parentElement.querySelectorAll('.' + this.classes.deleteButton);
      this.log('Init delete button(s), found : ', deleteButtons.length);

      var _iterator4 = _createForOfIteratorHelper(deleteButtons),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var deleteButton = _step4.value;
          this.initDeleteButton(deleteButton, jsonContent, target);
        } // Init Update

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var updateButtons = target.parentElement.querySelectorAll('.' + this.classes.updateButton);
      this.log('Init update button(s), found : ', updateButtons.length);

      var _iterator5 = _createForOfIteratorHelper(updateButtons),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var updateButton = _step5.value;
          this.initUpdateButton(updateButton, jsonContent, target);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Call remove UI Element on click after confirm
     *
     * @param deleteButton
     * @param jsonContent
     * @param target
     */

  }, {
    key: "initDeleteButton",
    value: function initDeleteButton(deleteButton, jsonContent, target) {
      var _self = this;

      deleteButton.onclick = function () {
        // Confirmation for delete
        if (confirm(_self.translations.confirm_delete)) {
          // Retrieve associated element of clicked button
          var elementToRemove = deleteButton.closest('.' + _self.classes.draggableItem); // Retrieve the index of the element

          var removedIndex = _self.getElementIndex(elementToRemove); // Check if index found and element exists


          if (removedIndex === false || typeof jsonContent[removedIndex] === 'undefined') {
            _self.error('Cannot find UI Element in index', {
              index: removedIndex,
              jsonContent: jsonContent
            });

            return;
          }

          _self.removeUiElement(removedIndex, jsonContent, target);

          elementToRemove.remove();
        }
      };
    }
    /**
     * Call controller to load and display form
     *
     * @param updateButton
     * @param jsonContent
     * @param target
     */

  }, {
    key: "initUpdateButton",
    value: function initUpdateButton(updateButton, jsonContent, target) {
      var _self = this;

      updateButton.onclick = function () {
        // Retrieve associated element of clicked button
        var elementToUpdate = updateButton.closest('.' + _self.classes.draggableItem); // Retrieve the index of the element

        var updateIndex = _self.getElementIndex(elementToUpdate); // Check if index found and element exists


        if (updateIndex === false || typeof jsonContent[updateIndex] === 'undefined') {
          _self.error('Cannot find UI Element in index', {
            index: updateIndex,
            jsonContent: jsonContent
          });

          return;
        }

        var uiElementToUpdate = jsonContent[updateIndex];

        _self.log('UI Element to update', uiElementToUpdate);

        _self.loadForm(uiElementToUpdate, updateIndex, jsonContent, target);
      };
    }
    /**
     * Load form for given UI Element
     *
     * @param uiElement [{type: "UI Element Type", fields: {}}]
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "loadForm",
    value: function loadForm(uiElement, uiElementIndex, jsonContent, target) {
      var xhr = new XMLHttpRequest();

      var _self = this;

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.

        var OK = 200; // status 200 is a successful return.

        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            _self.log('Loaded form', {
              response: xhr.responseText,
              xhr: xhr
            }); // Display the modal with the form


            _self.renderModal(xhr.responseText, uiElement.type, uiElementIndex, jsonContent, target);
          } else {
            _self.log('Error during load form', {
              status: xhr.status,
              xhr: xhr
            });
          }
        }
      };

      var params = 'data=' + encodeURIComponent(JSON.stringify(uiElement));
      xhr.open('POST', this.formRoute, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(params);
    }
    /**
     * Display modal with the given HTML
     *
     * @param html
     * @param uiElementType
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "renderModal",
    value: function renderModal(html, uiElementType, uiElementIndex, jsonContent, target) {
      var _self = this; // Init modal


      var modal = new tingle_js__WEBPACK_IMPORTED_MODULE_1___default.a.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        cssClass: [this.classes.renderedModal],
        closeLabel: this.translations.close,
        onOpen: function onOpen() {
          _self.initWysiwyg(modal.modalBoxContent);
        }
      });
      var modalPrimaryButtonClass = 'tingle-btn tingle-btn--primary tingle-btn--pull-right';
      var modalsecondaryButtonClass = 'tingle-btn tingle-btn--secondary tingle-btn--pull-right';

      if (this.templateRender === 'sylius') {
        modalPrimaryButtonClass = 'ui button primary tingle-btn--pull-right';
        modalsecondaryButtonClass = 'ui button tingle-btn--pull-right';
      } // Add the content


      modal.setContent(html); // Init the form inside the modal

      var form = this.initModalForm(uiElementType, uiElementIndex, jsonContent, target); // Button to submit

      modal.addFooterBtn(this.translations.apply_changes, modalPrimaryButtonClass, function () {
        if (form !== false) {
          form.dispatchEvent(_self.events.updateElement(modal));
        } else {
          _self.log('No form to submit');
        }
      }); // Button to cancel

      modal.addFooterBtn(this.translations.cancel_changes, modalsecondaryButtonClass, function () {
        modal.close();
      }); // Display the modal

      modal.open();
    }
    /**
     * Init form in modal if exists
     *
     * @param uiElementType
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     * @returns {boolean|Element}
     */

  }, {
    key: "initModalForm",
    value: function initModalForm(uiElementType, uiElementIndex, jsonContent, target) {
      // Retrieve form in modal
      var form = document.querySelector('.' + this.classes.renderedModal + ' form'); // Do nothing if no form found

      if (form === null) {
        return false;
      }

      var _self = this; // Actions to perform when form is submitted


      form.addEventListener('updateElement', function (e) {
        // Check if UI Element type we want to update exists
        if (typeof _self.uiElements[uiElementType] === 'undefined') {
          _self.error('Cannot find element of type ', uiElementType);

          return;
        } // Update elements with form data and modal to close it if data is valid


        var modal = e.detail;

        _self.updateWithFormData(form, uiElementType, uiElementIndex, modal, jsonContent, target);
      }, false);
      return form;
    }
    /**
     * Init wysiwyg with form content data
     *
     * @param container
     */

  }, {
    key: "initWysiwyg",
    value: function initWysiwyg(container) {
      var targets = container.querySelectorAll('textarea.wysiwyg-enabled');

      var _iterator6 = _createForOfIteratorHelper(targets),
          _step6;

      try {
        var _loop = function _loop() {
          var target = _step6.value;
          // Hide targeted input
          target.setAttribute('hidden', 'true'); // Create container

          var wysiwygContainer = document.createElement('div');
          wysiwygContainer.classList.add('pell');
          target.parentNode.appendChild(wysiwygContainer); // Init pell wysiwyg

          var editor = Object(pell__WEBPACK_IMPORTED_MODULE_2__["init"])({
            element: wysiwygContainer,
            // <Function>, required
            // Use the output html, triggered by element's `oninput` event
            onChange: function onChange(html) {
              target.textContent = html;
            },
            // <string>, optional, default = 'div'
            // Instructs the editor which element to inject via the return key
            defaultParagraphSeparator: 'p',
            // <Array[string | Object]>, string if overwriting, object if customizing/creating
            // action.name<string> (only required if overwriting)
            // action.icon<string> (optional if overwriting, required if custom action)
            // action.title<string> (optional)
            // action.result<Function> (required)
            // Specify the actions you specifically want (in order)
            actions: ['bold', 'italic', 'underline', 'ulist', 'olist', 'heading1', 'heading2', {
              name: 'heading3',
              icon: '<b>H<sub>3</sub></b>',
              title: 'Heading 3',
              result: function result() {
                return Object(pell__WEBPACK_IMPORTED_MODULE_2__["exec"])('formatBlock', '<h3>');
              }
            }, 'link']
          }); // Populate wysiwyg with initial content

          var initialContent = target.value;
          editor.content.innerHTML = initialContent;
        };

        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
    /**
     * Update elements with form data
     *
     * @param form
     * @param uiElementType
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "updateWithFormData",
    value: function updateWithFormData(form, uiElementType, uiElementIndex, modal, jsonContent, target) {
      // Convert form data to an array
      var updatedElement = this.convertFormToElement(form, uiElementType, modal);

      if (updatedElement) {
        this.log('Retrieved form element', {
          updatedElement: updatedElement
        }); // Update UI Element

        this.updateUiElement(uiElementIndex, updatedElement, jsonContent, target);
      } else {
        this.log('Invalid form, no element update');
      }
    }
    /**
     * Convert a form to an array
     *
     * @param form
     * @param uiElementType
     * @param modal
     * @returns {Array}
     */

  }, {
    key: "convertFormToElement",
    value: function convertFormToElement(form, uiElementType, modal) {
      // Initialize form data
      var formData = new FormData(form);
      formData.append('uiElementType', uiElementType); // Initialize returned element

      var element = {}; // Initialize AJAX request

      var xhr = new XMLHttpRequest();

      var _self = this;

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.

        var OK = 200; // status 200 is a successful return.

        var FORM_ERRORS = 406; // status 406 if form has errors.

        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            _self.log('Data sent and validated', {
              form: form,
              response: xhr.responseText,
              xhr: xhr
            });

            var response = JSON.parse(xhr.responseText);

            if (typeof response.element !== "undefined") {
              element = response.element;
            }

            modal.close();
          } else if (xhr.status === FORM_ERRORS) {
            _self.log('Form not valid', {
              form: form,
              response: xhr.responseText,
              xhr: xhr
            });

            var _response = JSON.parse(xhr.responseText);

            if (typeof _response.errors !== "undefined") {
              for (var field in _response.errors) {
                alert(field + ' : ' + _response.errors[field].join('\n'));
              }
            } // Return false to not update current data


            element = false;
          } else {
            _self.error('Error during file upload', {
              form: form,
              status: xhr.status,
              xhr: xhr
            }, _self.errorsTranslations.cannotUploadFile); // Return false to not update current data


            element = false;
          }
        }
      }; // Send data


      xhr.open('POST', this.submitRoute, false);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(formData);
      return element;
    }
    /**
     * Return markup to display UI Element meta data depending on render
     *
     * @param type
     * @param uiElementMetaData {short_description: "Short description", description: "Description", title: "Title", image: "/path/to/image.jpg"}
     */

  }, {
    key: "renderUiElementMetaData",
    value: function renderUiElementMetaData(type, uiElementMetaData) {
      return "\n        <div class=\"".concat(this.classes.draggableItem, "\" data-ui-element-type=\"").concat(type, "\">\n            <button class=\"").concat(this.classes.draggableItemHandler, "\" type=\"button\">").concat(this.translations.move, "</button>\n            <div class=\"").concat(this.classes.draggableItemInner, "\">\n                <div class=\"").concat(this.classes.draggableItemImg, "\">\n                    <img src=\"").concat(uiElementMetaData.image, "\" alt=\"\" width=\"90\" height=\"90\">\n                </div>\n                <div class=\"").concat(this.classes.draggableItemContent, "\">\n                    <div class=\"").concat(this.classes.draggableItemInfos, "\">\n                        <h2 class=\"").concat(this.classes.draggableItemTitle, "\">").concat(uiElementMetaData.title, "</h2>\n                        <p>").concat(uiElementMetaData.description, "</p>\n                    </div>\n                    <div class=\"").concat(this.classes.draggableItemActions, "\">\n                        <button class=\"").concat(this.classes.draggableItemButton, " ").concat(this.classes.updateButton, "\" type=\"button\" data-tooltip=\"").concat(this.translations.edit, "\">").concat(this.translations.edit, "</button>\n                        <button class=\"").concat(this.classes.draggableItemButton, " ").concat(this.classes.deleteButton, "\" type=\"button\" data-tooltip=\"").concat(this.translations["delete"], "\">").concat(this.translations["delete"], "</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ");
    }
    /**
     * Return markup to display action buttons
     */

  }, {
    key: "renderActionsButtons",
    value: function renderActionsButtons(templateRender) {
      if (templateRender === 'sylius') {
        return "\n            <div class=\"field\">\n                <div class=\"ui buttons\">\n                    <button class=\"ui primary button ".concat(this.classes.toggleButton, "\" type=\"button\">").concat(this.translations["new"], "</button>\n                </div>\n            </div>\n            ");
      }

      this.error('Cannot find render for : ', templateRender);
      return '';
    }
    /**
     * Init draggable elements for a container
     *
     * @param uiElements
     * @param elementsContainer
     */

  }, {
    key: "initReorder",
    value: function initReorder(uiElements, elementsContainer) {
      var _self = this; // First container is the list of UI Elements we can add, the second is the content of the field
      // We can only move elements from the `uiElements` to the `elementsContainer`


      var drake = new dragula__WEBPACK_IMPORTED_MODULE_0___default.a([uiElements, elementsContainer], {
        copy: function copy(el, source) {
          return source === uiElements;
        },
        accepts: function accepts(el, target) {
          return target !== uiElements;
        },
        moves: function moves(el, container, handle) {
          return handle.classList.contains(_self.classes.draggableItemHandler);
        }
      });
      return drake;
    }
    /**
     * Init event to be able to reorder elements in it's field
     *
     * @param drake
     * @param target
     * @param jsonContent
     */

  }, {
    key: "initReorderEvent",
    value: function initReorderEvent(drake, target, jsonContent) {
      var _this2 = this;

      drake.on('drag', function (el, source) {
        // Reorder inside the list
        if (source.id !== _this2.id.uiElementsContainer) {
          var index = _this2.getElementIndex(el);

          if (index !== false) {
            _this2.log('Reorder drag start : ', {
              index: index,
              el: el,
              source: source
            });

            _this2.currentIndex = index;
          }
        } // Add a new element from top


        if (source.id === _this2.id.uiElementsContainer) {
          _this2.log('Copy drag start : ', {
            el: el,
            source: source
          });
        }
      });
      drake.on('drop', function (el, targetElement, source, sibling) {
        // Reorder inside the list
        if (source.id !== _this2.id.uiElementsContainerInner) {
          var oldIndex = _this2.currentIndex;

          var newIndex = _this2.getElementIndex(el);

          if (newIndex !== false) {
            _this2.log('Reorder drag stop : ', {
              oldIndex: oldIndex,
              newIndex: newIndex,
              el: el,
              targetElement: targetElement,
              source: source,
              sibling: sibling
            });

            _this2.moveUiElement(oldIndex, newIndex, jsonContent, target);
          }
        } // Add a new element from top to Ui Element list


        if (source.id === _this2.id.uiElementsContainerInner && targetElement !== null && targetElement.classList.contains(_this2.classes.uiElementList)) {
          _this2.log('Copy drag stop : ', {
            el: el,
            targetElement: targetElement,
            source: source,
            sibling: sibling
          });

          var _newIndex = _this2.getElementIndex(el);

          var type = el.dataset.uiElementType;

          if (typeof type !== 'undefined') {
            _this2.addUiElement(type, _newIndex, jsonContent, target);
          } else {
            _this2.error('Cannot find `uiElementType` to add in data set', {
              dataSet: el.dataset,
              el: el
            });
          }
        }
      });
    }
    /**
     * Retrieve the index of element in UI Elements list
     *
     * @param el
     * @returns {boolean|number}
     */

  }, {
    key: "getElementIndex",
    value: function getElementIndex(el) {
      if (!el.parentElement) {
        return false;
      }

      return [].slice.call(el.parentElement.children).indexOf(el);
    }
    /**
     * Update the JSON to add an UI element
     *
     * @param type
     * @param index
     * @param jsonContent
     * @param target
     */

  }, {
    key: "addUiElement",
    value: function addUiElement(type, index, jsonContent, target) {
      this.log('Add UI Element : ', {
        type: type,
        index: index,
        target: target,
        beforeMoveJson: jsonContent
      }); // Initialize new UI Element of wanted type

      var uiElement = {
        type: type,
        fields: {}
      }; // Add the element in JSON

      jsonContent.splice(index, 0, uiElement); // Update the textarea with JSON

      target.value = JSON.stringify(jsonContent);
      this.log('Added UI Element : ', {
        afterMoveJson: jsonContent,
        newTargetValue: target.value
      }); // Initialize actions for the new UI Element, it actually recreate also events for existing elements

      this.initActions(target, jsonContent);
    }
    /**
     * Update the JSON to move UI elements
     *
     * @param oldIndex
     * @param newIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "moveUiElement",
    value: function moveUiElement(oldIndex, newIndex, jsonContent, target) {
      if (oldIndex !== newIndex) {
        this.log('Move UI Element : ', {
          oldIndex: oldIndex,
          newIndex: newIndex,
          target: target,
          beforeMoveJson: jsonContent
        });

        if (newIndex >= jsonContent.length) {
          this.error('Element moved outside the list', {
            newIndex: newIndex,
            sizeList: jsonContent.length
          });
        } // Move the UI element to the selected index and change position of others


        jsonContent.splice(newIndex, 0, jsonContent.splice(oldIndex, 1)[0]); // Update the textarea with JSON

        target.value = JSON.stringify(jsonContent);
        this.log('Moved UI Element : ', {
          afterMoveJson: jsonContent,
          newTargetValue: target.value
        });
      } else {
        this.log('Not moved UI Element, same index', {
          oldIndex: oldIndex,
          newIndex: newIndex,
          target: target,
          beforeMoveJson: jsonContent
        });
      }
    }
    /**
     * Update the JSON for a given element
     *
     * @param index
     * @param element
     * @param jsonContent
     * @param target
     */

  }, {
    key: "updateUiElement",
    value: function updateUiElement(index, element, jsonContent, target) {
      if (typeof jsonContent[index] !== 'undefined') {
        this.log('Update UI Element : ', {
          index: index,
          element: element,
          jsonContent: jsonContent,
          target: target
        }); // Set new content for UI Element

        jsonContent[index] = element; // Update the textarea with JSON

        target.value = JSON.stringify(jsonContent);
        this.log('Updated UI Element : ', {
          index: index,
          element: element,
          jsonContent: jsonContent,
          target: target
        });
      } else {
        this.error('Cannot found element for index', {
          index: index,
          element: element,
          jsonContent: jsonContent,
          target: target
        });
      }
    }
    /**
     * Update the JSON to remove UI element
     *
     * @param removedIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "removeUiElement",
    value: function removeUiElement(removedIndex, jsonContent, target) {
      this.log('Remove UI Element : ', {
        removedIndex: removedIndex,
        target: target,
        beforeMoveJson: jsonContent
      }); // Remove the element for this index, it will change indexes for other elements too

      jsonContent.splice(removedIndex, 1); // Update the textarea with JSON

      target.value = JSON.stringify(jsonContent);
      this.log('Removed UI Element : ', {
        afterMoveJson: jsonContent,
        newTargetValue: target.value
      });
    }
    /**
     * Add console error if debug
     *
     * @param description
     * @param content
     * @param displayedError
     * @param resetRichField
     */

  }, {
    key: "error",
    value: function error(description, content) {
      var displayedError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var resetRichField = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (resetRichField) {
        // If error, display original fields
        var _iterator7 = _createForOfIteratorHelper(this.targets),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var target = _step7.value;
            target.removeAttribute('hidden');
          } // Remove generated blocks

        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        var _iterator8 = _createForOfIteratorHelper(document.querySelectorAll('.' + this.classes.uiElementList)),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _target = _step8.value;

            _target.remove();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      } // Display error in console


      console.error(description);
      console.error(content); // Display error for user if message exists

      if (displayedError) {
        alert(displayedError);
      }
    }
    /**
     * Add console log if debug is true
     *
     * @param description
     * @param content
     */

  }, {
    key: "log",
    value: function log(description, content) {
      // Display message for debug mode
      if (this.debug) {
        console.log(description);

        if (content) {
          console.log(content);
        }
      }
    }
  }]);

  return MbizRichEditorFields;
}(); // Init the plugin


document.addEventListener('DOMContentLoaded', function () {
  var richEditor = new MbizRichEditorFields(monsieurbizRichEditorPluginConfig);
  richEditor.init();
});

/***/ }),

/***/ "./node_modules/atoa/atoa.js":
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ "./node_modules/contra/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(/*! ticky */ "./node_modules/ticky/ticky-browser.js");

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ "./node_modules/contra/emitter.js":
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(/*! atoa */ "./node_modules/atoa/atoa.js");
var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/contra/debounce.js");

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ "./node_modules/crossvent/src/crossvent.js":
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__(/*! custom-event */ "./node_modules/custom-event/index.js");
var eventmap = __webpack_require__(/*! ./eventmap */ "./node_modules/crossvent/src/eventmap.js");
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/crossvent/src/eventmap.js":
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/custom-event/index.js":
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dragula/classes.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ "./node_modules/dragula/dragula.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__(/*! contra/emitter */ "./node_modules/contra/emitter.js");
var crossvent = __webpack_require__(/*! crossvent */ "./node_modules/crossvent/src/crossvent.js");
var classes = __webpack_require__(/*! ./classes */ "./node_modules/dragula/classes.js");
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/pell/dist/pell.min.js":
/*!********************************************!*\
  !*** ./node_modules/pell/dist/pell.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c="defaultParagraphSeparator",l="formatBlock",a=function(t,e,n){return t.addEventListener(e,n)},s=function(t,e){return t.appendChild(e)},d=function(t){return document.createElement(t)},n=function(t){return document.queryCommandState(t)},f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(t,!1,e)},p={bold:{icon:"<b>B</b>",title:"Bold",state:function(){return n("bold")},result:function(){return f("bold")}},italic:{icon:"<i>I</i>",title:"Italic",state:function(){return n("italic")},result:function(){return f("italic")}},underline:{icon:"<u>U</u>",title:"Underline",state:function(){return n("underline")},result:function(){return f("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:function(){return n("strikeThrough")},result:function(){return f("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return f(l,"<h1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return f(l,"<h2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return f(l,"<p>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return f(l,"<blockquote>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return f("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return f("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return f(l,"<pre>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return f("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var t=window.prompt("Enter the link URL");t&&f("createLink",t)}},image:{icon:"&#128247;",title:"Image",result:function(){var t=window.prompt("Enter the image URL");t&&f("insertImage",t)}}},m={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},r=function(n){var t=n.actions?n.actions.map(function(t){return"string"==typeof t?p[t]:p[t.name]?e({},p[t.name],t):t}):Object.keys(p).map(function(t){return p[t]}),r=e({},m,n.classes),i=n[c]||"div",o=d("div");o.className=r.actionbar,s(n.element,o);var u=n.element.content=d("div");return u.contentEditable=!0,u.className=r.content,u.oninput=function(t){var e=t.target.firstChild;e&&3===e.nodeType?f(l,"<"+i+">"):"<br>"===u.innerHTML&&(u.innerHTML=""),n.onChange(u.innerHTML)},u.onkeydown=function(t){var e;"Enter"===t.key&&"blockquote"===(e=l,document.queryCommandValue(e))&&setTimeout(function(){return f(l,"<"+i+">")},0)},s(n.element,u),t.forEach(function(t){var e=d("button");if(e.className=r.button,e.innerHTML=t.icon,e.title=t.title,e.setAttribute("type","button"),e.onclick=function(){return t.result()&&u.focus()},t.state){var n=function(){return e.classList[t.state()?"add":"remove"](r.selected)};a(u,"keyup",n),a(u,"mouseup",n),a(e,"click",n)}s(o,e)}),n.styleWithCSS&&f("styleWithCSS"),f(c,i),n.element},i={exec:f,init:r};t.exec=f,t.init=r,t.default=i,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/ticky/ticky-browser.js":
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tingle.js/dist/tingle.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tingle.js/dist/tingle.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){var o=!1;function t(t){this.opts=function(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}({},{onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]},t),this.init()}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}return t.prototype.init=function(){if(!this.modal)return function(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose");this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>',this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel));this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn);this.modal.appendChild(this.modalBox)}.call(this),function(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:function(t){var o=this.modal.offsetWidth-this.modal.clientWidth,e=t.clientX>=this.modal.offsetWidth-15,s=this.modal.scrollHeight!==this.modal.offsetHeight;if("MacIntel"===navigator.platform&&0==o&&e&&s)return;-1!==this.opts.closeMethods.indexOf("overlay")&&!function(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:function(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn);this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}.call(this),document.body.appendChild(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){o=t},t.prototype._isBusy=function(){return o},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),function(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn);this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1),this.checkOverflow(),this}},t.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),!1,"function"==typeof this.opts.beforeClose)if(!this.opts.beforeClose.call(this))return void this._busy(!1);document.body.classList.remove("tingle-enabled"),document.body.style.top=null,window.scrollTo({top:this._scrollPosition,behavior:"instant"}),this.modal.classList.remove("tingle-modal--visible");var o=this;o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)}},t.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return function(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}.call(this),this},t.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){return window.innerHeight<=this.modalBox.clientHeight},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))},{modal:t}});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXRvYS9hdG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb250cmEvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnRyYS9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcm9zc3ZlbnQvc3JjL2Nyb3NzdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3Jvc3N2ZW50L3NyYy9ldmVudG1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3VzdG9tLWV2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kcmFndWxhL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWd1bGEvZHJhZ3VsYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVsbC9kaXN0L3BlbGwubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpY2t5L3RpY2t5LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbmdsZS5qcy9kaXN0L3RpbmdsZS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJNYml6UmljaEVkaXRvckZpZWxkcyIsImNvbmZpZyIsInRlbXBsYXRlUmVuZGVyIiwiZGVidWciLCJ0YXJnZXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsImNvbnRhaW5lclNlbGVjdG9yIiwidWlFbGVtZW50cyIsInRyYW5zbGF0aW9ucyIsImVycm9yc1RyYW5zbGF0aW9ucyIsImZvcm1Sb3V0ZSIsInN1Ym1pdFJvdXRlIiwibG9nIiwibGVuZ3RoIiwiaWQiLCJ1aUVsZW1lbnRzQ29udGFpbmVyIiwidWlFbGVtZW50c0NvbnRhaW5lcklubmVyIiwidWlFbGVtZW50c0NvbnRlbnQiLCJjbGFzc2VzIiwidWlFbGVtZW50TGlzdCIsImRyb3BhYmxlQ29udGFpbmVyIiwiZHJvcGFibGVDb250YWluZXJJbm5lciIsImRyYWdnYWJsZUNvbnRhaW5lciIsImRyYWdnYWJsZUl0ZW0iLCJkcmFnZ2FibGVJdGVtSGFuZGxlciIsImRyYWdnYWJsZUl0ZW1Jbm5lciIsImRyYWdnYWJsZUl0ZW1JbWciLCJkcmFnZ2FibGVJdGVtQ29udGVudCIsImRyYWdnYWJsZUl0ZW1JbmZvcyIsImRyYWdnYWJsZUl0ZW1UaXRsZSIsImRyYWdnYWJsZUl0ZW1BY3Rpb25zIiwiZHJhZ2dhYmxlSXRlbUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsInVwZGF0ZUJ1dHRvbiIsInRvZ2dsZUJ1dHRvbiIsImNsb3NlQnV0dG9uIiwicmVuZGVyZWRNb2RhbCIsImV2ZW50cyIsInVpRWxlbWVudHNCdWlsdCIsIkV2ZW50IiwidXBkYXRlRWxlbWVudCIsIm1vZGFsIiwiQ3VzdG9tRXZlbnQiLCJfc2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5pdEZpZWxkcyIsInRvZ2dsZVVpRWxlbWVudHNWaXNpYmlsaXR5IiwiaW5pdFVpRWxlbWVudHMiLCJ0YXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidWlFbGVtZW50c0NvbnRhaW5lckNsb3NlIiwiY2xvc2UiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwidHlwZSIsInVpRWxlbWVudCIsInJlbmRlcmVkVWlFbGVtZW50IiwicmVuZGVyVWlFbGVtZW50TWV0YURhdGEiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGlzcGF0Y2hFdmVudCIsImNvbnRlbnQiLCJ2YWx1ZSIsImpzb25Db250ZW50IiwiSlNPTiIsInBhcnNlIiwiY2Fubm90UGFyc2VKc29uIiwiaW5pdEZpZWxkIiwiaW5pdEFjdGlvbnMiLCJzZXRBdHRyaWJ1dGUiLCJlbGVtZW50c0NvbnRhaW5lciIsImRhdGFzZXQiLCJwbGFjZWhvbGRlciIsImNhbm5vdEZpbmRUeXBlIiwidWlFbGVtZW50TWV0YURhdGEiLCJyZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhIiwicmVuZGVyQWN0aW9uc0J1dHRvbnMiLCJwYXJlbnROb2RlIiwicmVvcmRlciIsImluaXRSZW9yZGVyIiwiaW5pdFJlb3JkZXJFdmVudCIsInRvZ2dsZUJ1dHRvbnMiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImRlbGV0ZUJ1dHRvbnMiLCJwYXJlbnRFbGVtZW50IiwiaW5pdERlbGV0ZUJ1dHRvbiIsInVwZGF0ZUJ1dHRvbnMiLCJpbml0VXBkYXRlQnV0dG9uIiwib25jbGljayIsImNvbmZpcm0iLCJjb25maXJtX2RlbGV0ZSIsImVsZW1lbnRUb1JlbW92ZSIsImNsb3Nlc3QiLCJyZW1vdmVkSW5kZXgiLCJnZXRFbGVtZW50SW5kZXgiLCJpbmRleCIsInJlbW92ZVVpRWxlbWVudCIsInJlbW92ZSIsImVsZW1lbnRUb1VwZGF0ZSIsInVwZGF0ZUluZGV4IiwidWlFbGVtZW50VG9VcGRhdGUiLCJsb2FkRm9ybSIsInVpRWxlbWVudEluZGV4IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJET05FIiwiT0siLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyZXNwb25zZVRleHQiLCJyZW5kZXJNb2RhbCIsInBhcmFtcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0cmluZ2lmeSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImh0bWwiLCJ1aUVsZW1lbnRUeXBlIiwidGluZ2xlIiwiZm9vdGVyIiwic3RpY2t5Rm9vdGVyIiwiY2xvc2VNZXRob2RzIiwiY3NzQ2xhc3MiLCJjbG9zZUxhYmVsIiwib25PcGVuIiwiaW5pdFd5c2l3eWciLCJtb2RhbEJveENvbnRlbnQiLCJtb2RhbFByaW1hcnlCdXR0b25DbGFzcyIsIm1vZGFsc2Vjb25kYXJ5QnV0dG9uQ2xhc3MiLCJzZXRDb250ZW50IiwiZm9ybSIsImluaXRNb2RhbEZvcm0iLCJhZGRGb290ZXJCdG4iLCJhcHBseV9jaGFuZ2VzIiwiY2FuY2VsX2NoYW5nZXMiLCJkZXRhaWwiLCJ1cGRhdGVXaXRoRm9ybURhdGEiLCJ3eXNpd3lnQ29udGFpbmVyIiwiZWRpdG9yIiwiaW5pdCIsImVsZW1lbnQiLCJvbkNoYW5nZSIsInRleHRDb250ZW50IiwiZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvciIsImFjdGlvbnMiLCJuYW1lIiwiaWNvbiIsInRpdGxlIiwicmVzdWx0IiwiZXhlYyIsImluaXRpYWxDb250ZW50IiwiaW5uZXJIVE1MIiwidXBkYXRlZEVsZW1lbnQiLCJjb252ZXJ0Rm9ybVRvRWxlbWVudCIsInVwZGF0ZVVpRWxlbWVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJGT1JNX0VSUk9SUyIsImVycm9ycyIsImZpZWxkIiwiYWxlcnQiLCJqb2luIiwiY2Fubm90VXBsb2FkRmlsZSIsIm1vdmUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiZWRpdCIsImRyYWtlIiwiZHJhZ3VsYSIsImNvcHkiLCJlbCIsInNvdXJjZSIsImFjY2VwdHMiLCJtb3ZlcyIsImhhbmRsZSIsImNvbnRhaW5zIiwib24iLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRFbGVtZW50Iiwic2libGluZyIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJtb3ZlVWlFbGVtZW50IiwiYWRkVWlFbGVtZW50IiwiZGF0YVNldCIsInNsaWNlIiwiY2FsbCIsImNoaWxkcmVuIiwiaW5kZXhPZiIsImJlZm9yZU1vdmVKc29uIiwiZmllbGRzIiwic3BsaWNlIiwiYWZ0ZXJNb3ZlSnNvbiIsIm5ld1RhcmdldFZhbHVlIiwic2l6ZUxpc3QiLCJkaXNwbGF5ZWRFcnJvciIsInJlc2V0UmljaEZpZWxkIiwicmVtb3ZlQXR0cmlidXRlIiwiY29uc29sZSIsInJpY2hFZGl0b3IiLCJtb25zaWV1cmJpelJpY2hFZGl0b3JQbHVnaW5Db25maWciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUVBOzs7O0lBR01BLG9CO0FBRUY7Ozs7QUFJQSxnQ0FBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNoQjtBQUNBLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0QsTUFBTCxDQUFZQyxjQUFsQztBQUNBLFNBQUtDLEtBQUwsR0FBYSxL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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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LHdFQUF3RSxtQ0FBbUMsc0RBQXNELHNDQUFzQyw0VUFBNFUsRUFBRSxTQUFTLEU7Ozs7Ozs7Ozs7O0FDQTN4Tzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoianMvcmljaC1lZGl0b3ItanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsImltcG9ydCBkcmFndWxhIGZyb20gJ2RyYWd1bGEnO1xuaW1wb3J0IHRpbmdsZSBmcm9tICd0aW5nbGUuanMnO1xuaW1wb3J0IHsgZXhlYywgaW5pdCB9IGZyb20gJ3BlbGwnXG5cbi8qKlxuICogQ2xhc3MgdG8gbWFuYWdlIFJpY2ggZWRpdG9yIGZpZWxkcyB3aXRoIFVJIEVsZW1lbnRzXG4gKi9cbmNsYXNzIE1iaXpSaWNoRWRpdG9yRmllbGRzIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBNYml6UmljaEVkaXRvckZpZWxkcywgc2VlIGNvbmZpZyBpbiBgc3JjL1Jlc291cmNlcy92aWV3cy9BZG1pbi9hcHAuaHRtbC50d2lnYFxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLy8gQ29uZmlndXJhdGlvbiBvZiBwbHVnaW5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMudGVtcGxhdGVSZW5kZXIgPSB0aGlzLmNvbmZpZy50ZW1wbGF0ZVJlbmRlcjtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHRoaXMuY29uZmlnLmRlYnVnO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5xdWVyeVNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5jb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMudWlFbGVtZW50cyA9IHRoaXMuY29uZmlnLnVpRWxlbWVudHM7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0gdGhpcy5jb25maWcudHJhbnNsYXRpb25zO1xuICAgICAgICB0aGlzLmVycm9yc1RyYW5zbGF0aW9ucyA9IHRoaXMuY29uZmlnLmVycm9yc1RyYW5zbGF0aW9ucztcbiAgICAgICAgdGhpcy5mb3JtUm91dGUgPSB0aGlzLmNvbmZpZy5mb3JtUm91dGU7XG4gICAgICAgIHRoaXMuc3VibWl0Um91dGUgPSB0aGlzLmNvbmZpZy5zdWJtaXRSb3V0ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdQbHVnaW4gY29uZmlndXJhdGlvbjonLCB0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnTWF0Y2hlZCBlbGVtZW50KHMpOicsIHRoaXMudGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW50ZXJuYWwgYXR0cmlidXRlc1xuICAgICAgICB0aGlzLmlkID0ge1xuICAgICAgICAgICAgdWlFbGVtZW50c0NvbnRhaW5lcjogJ21iaXotcmljaC1lZGl0b3ItZWxlbWVudHMtY29udGFpbmVyJyxcbiAgICAgICAgICAgIHVpRWxlbWVudHNDb250YWluZXJJbm5lcjogJ21iaXotcmljaC1lZGl0b3ItZWxlbWVudHMtY29udGFpbmVyLWlubmVyJyxcbiAgICAgICAgICAgIHVpRWxlbWVudHNDb250ZW50OiAnbWJpei1yaWNoLWVkaXRvci1lbGVtZW50cy1jb250ZW50JyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgdWlFbGVtZW50TGlzdDogJ21iaXotcmljaC1lZGl0b3ItY29tcG9uZW50LXVpLWVsZW1lbnRzJyxcbiAgICAgICAgICAgIGRyb3BhYmxlQ29udGFpbmVyOiAnbWJpei1yaWNoLWVkaXRvci1kcm9wYWJsZS1jb250YWluZXInLFxuICAgICAgICAgICAgZHJvcGFibGVDb250YWluZXJJbm5lcjogJ21iaXotcmljaC1lZGl0b3ItZHJvcGFibGUtY29udGFpbmVyLWlubmVyJyxcbiAgICAgICAgICAgIGRyYWdnYWJsZUNvbnRhaW5lcjogJ21iaXotcmljaC1lZGl0b3ItZHJhZ2dhYmxlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBkcmFnZ2FibGVJdGVtOiAnbWJpei1yaWNoLWVkaXRvci1kcmFnZ2FibGUtaXRlbScsXG4gICAgICAgICAgICBkcmFnZ2FibGVJdGVtSGFuZGxlcjogJ21iaXotcmljaC1lZGl0b3ItZHJhZ2dhYmxlLWl0ZW0taGFuZGxlcicsXG4gICAgICAgICAgICBkcmFnZ2FibGVJdGVtSW5uZXI6ICdtYml6LXJpY2gtZWRpdG9yLWRyYWdnYWJsZS1pdGVtLWlubmVyJyxcbiAgICAgICAgICAgIGRyYWdnYWJsZUl0ZW1JbWc6ICdtYml6LXJpY2gtZWRpdG9yLWRyYWdnYWJsZS1pdGVtLWltZycsXG4gICAgICAgICAgICBkcmFnZ2FibGVJdGVtQ29udGVudDogJ21iaXotcmljaC1lZGl0b3ItZHJhZ2dhYmxlLWl0ZW0tY29udGVudCcsXG4gICAgICAgICAgICBkcmFnZ2FibGVJdGVtSW5mb3M6ICdtYml6LXJpY2gtZWRpdG9yLWRyYWdnYWJsZS1pdGVtLWluZm9zJyxcbiAgICAgICAgICAgIGRyYWdnYWJsZUl0ZW1UaXRsZTogJ21iaXotcmljaC1lZGl0b3ItZHJhZ2dhYmxlLWl0ZW0tdGl0bGUnLFxuICAgICAgICAgICAgZHJhZ2dhYmxlSXRlbUFjdGlvbnM6ICdtYml6LXJpY2gtZWRpdG9yLWRyYWdnYWJsZS1pdGVtLWFjdGlvbnMnLFxuICAgICAgICAgICAgZHJhZ2dhYmxlSXRlbUJ1dHRvbjogJ21iaXotcmljaC1lZGl0b3ItZHJhZ2dhYmxlLWl0ZW0tYnV0dG9uJyxcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbjogJ21iaXotcmljaC1lZGl0b3ItZGVsZXRlLWJ1dHRvbicsXG4gICAgICAgICAgICB1cGRhdGVCdXR0b246ICdtYml6LXJpY2gtZWRpdG9yLXVwZGF0ZS1idXR0b24nLFxuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uOiAnbWJpei1yaWNoLWVkaXRvci10b2dnbGUtYnV0dG9uJyxcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiAnbWJpei1yaWNoLWVkaXRvci1jbG9zZS1idXR0b24nLFxuICAgICAgICAgICAgcmVuZGVyZWRNb2RhbDogJ21iaXotcmljaC1lZGl0b3ItcmVuZHJlZC1tb2RhbCcsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgICAgICAgdWlFbGVtZW50c0J1aWx0OiBuZXcgRXZlbnQoJ3VpRWxlbWVudHNCdWlsdCcpLFxuICAgICAgICAgICAgdXBkYXRlRWxlbWVudDogZnVuY3Rpb24obW9kYWwpIHsgcmV0dXJuIG5ldyBDdXN0b21FdmVudCgndXBkYXRlRWxlbWVudCcsIHsnZGV0YWlsJzogbW9kYWx9KSB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZWFjaCBSaWNoIEVkaXRvciBlbGVtZW50XG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gSW5pdCBvbmx5IGlmIHdlIG1hdGNoIGF0IGxlYXN0IG9uZSB0YXJnZXRcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAvLyBJbml0IGZpZWxkcyBvbmx5IHdoZW4gVUkgRWxlbWVudHMgYXJlIGJ1aWx0XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd1aUVsZW1lbnRzQnVpbHQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYubG9nKCdVaSBFbGVtZW50cyBjb250YWluZXIgaXMgYnVpbHQnLCBlKTtcbiAgICAgICAgICAgICAgICBfc2VsZi5pbml0RmllbGRzKCk7XG4gICAgICAgICAgICAgICAgX3NlbGYudG9nZ2xlVWlFbGVtZW50c1Zpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbml0VWlFbGVtZW50cyh0aGlzLmNvbnRhaW5lciwgdGhpcy51aUVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIFVJIEVsZW1lbnRzIGFyZWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKiBAcGFyYW0gdWlFbGVtZW50c1xuICAgICAqL1xuICAgIGluaXRVaUVsZW1lbnRzKHRhcmdldCwgdWlFbGVtZW50cykge1xuICAgICAgICB0aGlzLmxvZygnSW5pdCBVSSBFbGVtZW50czonLCB1aUVsZW1lbnRzKTtcblxuICAgICAgICAvLyBJbml0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCB1aUVsZW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVpRWxlbWVudHNDb250YWluZXIuaWQgPSB0aGlzLmlkLnVpRWxlbWVudHNDb250YWluZXI7XG4gICAgICAgIHVpRWxlbWVudHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZHJvcGFibGVDb250YWluZXIsIHRoaXMuY2xhc3Nlcy51aUVsZW1lbnRMaXN0KTtcblxuICAgICAgICAvLyBJbml0IGNsb3NlIGNvbnRhaW5lciBidXR0b25cbiAgICAgICAgY29uc3QgdWlFbGVtZW50c0NvbnRhaW5lckNsb3NlID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuY2xvc2VCdXR0b259ICR7dGhpcy5jbGFzc2VzLnRvZ2dsZUJ1dHRvbn1cIj4ke3RoaXMudHJhbnNsYXRpb25zLmNsb3NlfTwvYnV0dG9uPmA7XG4gICAgICAgIHVpRWxlbWVudHNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB1aUVsZW1lbnRzQ29udGFpbmVyQ2xvc2UpO1xuXG4gICAgICAgIC8vIEluaXQgY29udGFpbmVyIGlubmVyXG4gICAgICAgIGNvbnN0IHVpRWxlbWVudHNDb250YWluZXJJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB1aUVsZW1lbnRzQ29udGFpbmVySW5uZXIuaWQgPSB0aGlzLmlkLnVpRWxlbWVudHNDb250YWluZXJJbm5lcjtcbiAgICAgICAgdWlFbGVtZW50c0NvbnRhaW5lcklubmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRyb3BhYmxlQ29udGFpbmVySW5uZXIpO1xuICAgICAgICB1aUVsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHVpRWxlbWVudHNDb250YWluZXJJbm5lcik7XG5cbiAgICAgICAgLy8gTG9vcCBvbiBVSSBFbGVtZW50c1xuICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgdHlwZSBpbiB1aUVsZW1lbnRzKSB7XG4gICAgICAgICAgICBsZXQgdWlFbGVtZW50ID0gdWlFbGVtZW50c1t0eXBlXTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdJbml0IFVJIEVsZW1lbnQ6JywgdWlFbGVtZW50KTtcblxuICAgICAgICAgICAgbGV0IHJlbmRlcmVkVWlFbGVtZW50ID0gdGhpcy5yZW5kZXJVaUVsZW1lbnRNZXRhRGF0YSh0eXBlLCB1aUVsZW1lbnQsIHRoaXMudGVtcGxhdGVSZW5kZXIpO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkVWlFbGVtZW50ID09PSAnJykge1xuICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWlFbGVtZW50c0NvbnRhaW5lcklubmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcmVuZGVyZWRVaUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZW5kIGdlbmVyYXRlZCBIVE1MIHRvIGRpc3BsYXkgY3VycmVudCBVSSBFbGVtZW50cyBvZiB0YXJnZXRcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZSh1aUVsZW1lbnRzQ29udGFpbmVyLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KHRoaXMuZXZlbnRzLnVpRWxlbWVudHNCdWlsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGVhY2ggUmljaCBFZGl0b3IgZmllbGRzXG4gICAgICovXG4gICAgaW5pdEZpZWxkcygpIHtcbiAgICAgICAgZm9yIChsZXQgdGFyZ2V0IG9mIHRoaXMudGFyZ2V0cykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gJ1tdJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9nKCdUYXJnZXRcXCdzIGNvbnRlbnQ6JywgY29udGVudCk7XG4gICAgICAgICAgICBsZXQganNvbkNvbnRlbnQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGpzb25Db250ZW50ID0gSlNPTi5wYXJzZShjb250ZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVbmFibGUgdG8gcGFyc2UgdGhlIFJpY2ggQ29udGVudCBKU09OIGZvciB0aGlzIGNvbnRlbnQgOiAnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yc1RyYW5zbGF0aW9ucy5jYW5ub3RQYXJzZUpzb24sXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0RmllbGQodGFyZ2V0LCBqc29uQ29udGVudCk7XG4gICAgICAgICAgICB0aGlzLmluaXRBY3Rpb25zKHRhcmdldCwganNvbkNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgZmllbGQgZGVwZW5kaW5nIG9uIGl0J3MgcGFyc2VkIGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnQgW3t0eXBlOiBcIlVJIEVsZW1lbnQgVHlwZVwiLCBmaWVsZHM6IHt9fV1cbiAgICAgKi9cbiAgICBpbml0RmllbGQodGFyZ2V0LCBqc29uQ29udGVudCkge1xuICAgICAgICB0aGlzLmxvZygnSW5pdCBmaWVsZCB3aXRoIHBhcnNlZCBjb250ZW50OicsIGpzb25Db250ZW50KTtcblxuICAgICAgICAvLyBIaWRlIG9yaWdpbmFsIGlucHV0XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gSW5pdCBjb250YWluZXJcbiAgICAgICAgY29uc3QgZWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudHNDb250YWluZXIuaWQgPSB0aGlzLmlkLnVpRWxlbWVudHNDb250ZW50O1xuICAgICAgICBlbGVtZW50c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kcmFnZ2FibGVDb250YWluZXIsIHRoaXMuY2xhc3Nlcy51aUVsZW1lbnRMaXN0KTtcbiAgICAgICAgZWxlbWVudHNDb250YWluZXIuZGF0YXNldC5wbGFjZWhvbGRlciA9IHRoaXMudHJhbnNsYXRpb25zLnBsYWNlaG9sZGVyO1xuXG4gICAgICAgIC8vIExvb3Agb24gVUkgRWxlbWVudHNcbiAgICAgICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IHVpRWxlbWVudCBvZiBqc29uQ29udGVudCkge1xuICAgICAgICAgICAgLy8gUmV0cmlldmUgdGhlIFVpIEVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgdGhpcy5sb2coJ0luaXQgVUkgRWxlbWVudDonLCB1aUVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVpRWxlbWVudHNbdWlFbGVtZW50LnR5cGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQ2Fubm90IGZpbmQgZWxlbWVudCBvZiB0eXBlICcsXG4gICAgICAgICAgICAgICAgICAgIHVpRWxlbWVudC50eXBlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yc1RyYW5zbGF0aW9ucy5jYW5ub3RGaW5kVHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbmRlciBVaSBFbGVtZW50IG1ldGEgZGF0YVxuICAgICAgICAgICAgbGV0IHVpRWxlbWVudE1ldGFEYXRhID0gdGhpcy51aUVsZW1lbnRzW3VpRWxlbWVudC50eXBlXTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNYXRjaGVkIFVpIEVsZW1lbnQgd2l0aCBtZXRhIGRhdGE6JywgdWlFbGVtZW50TWV0YURhdGEpO1xuICAgICAgICAgICAgbGV0IHJlbmRlcmVkVWlFbGVtZW50TWV0YURhdGEgPSB0aGlzLnJlbmRlclVpRWxlbWVudE1ldGFEYXRhKHVpRWxlbWVudC50eXBlLCB1aUVsZW1lbnRNZXRhRGF0YSwgdGhpcy50ZW1wbGF0ZVJlbmRlcik7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCByZW5kZXJlZCBVaSBFbGVtZW50IG1ldGEgZGF0YSBpbiBjb250YWluZXJcbiAgICAgICAgICAgIHRoaXMubG9nKCdSZW5kZXJlZCBVaSBFbGVtZW50IG1ldGEgZGF0YTonLCByZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhKTtcbiAgICAgICAgICAgIGVsZW1lbnRzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgYWN0aW9ucyBidXR0b25zIGJlZm9yZSB0YXJnZXRcbiAgICAgICAgdGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB0aGlzLnJlbmRlckFjdGlvbnNCdXR0b25zKHRoaXMudGVtcGxhdGVSZW5kZXIpKTtcblxuICAgICAgICAvLyBBcHBlbmQgZ2VuZXJhdGVkIEhUTUwgdG8gZGlzcGxheSBjdXJyZW50IFVJIEVsZW1lbnRzIG9mIHRhcmdldFxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlbGVtZW50c0NvbnRhaW5lcik7XG4gICAgICAgICAgICBsZXQgcmVvcmRlciA9IHRoaXMuaW5pdFJlb3JkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkLnVpRWxlbWVudHNDb250YWluZXIgKyAnPiBkaXYnKSwgZWxlbWVudHNDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckV2ZW50KHJlb3JkZXIsIHRhcmdldCwganNvbkNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIHVpIGVsZW1lbnRzXG4gICAgICovXG4gICAgdG9nZ2xlVWlFbGVtZW50c1Zpc2liaWxpdHkoKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuY2xhc3Nlcy50b2dnbGVCdXR0b24pO1xuXG4gICAgICAgIGZvciAobGV0IHRvZ2dsZUJ1dHRvbiBvZiB0b2dnbGVCdXR0b25zKSB7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZC51aUVsZW1lbnRzQ29udGFpbmVyKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1leHBhbmRlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGFjdGlvbiBmb3IgZWFjaCBlbGVtZW50LCBjdXJyZW50IGFjdGlvbnMgYXJlIHVwZGF0ZSBhbmQgZGVsZXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICovXG4gICAgaW5pdEFjdGlvbnModGFyZ2V0LCBqc29uQ29udGVudCkge1xuICAgICAgICAvLyBJbml0IERlbGV0ZVxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5jbGFzc2VzLmRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRoaXMubG9nKCdJbml0IGRlbGV0ZSBidXR0b24ocyksIGZvdW5kIDogJywgZGVsZXRlQnV0dG9ucy5sZW5ndGgpXG4gICAgICAgIGZvciAobGV0IGRlbGV0ZUJ1dHRvbiBvZiBkZWxldGVCdXR0b25zKSB7XG4gICAgICAgICAgICB0aGlzLmluaXREZWxldGVCdXR0b24oZGVsZXRlQnV0dG9uLCBqc29uQ29udGVudCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgVXBkYXRlXG4gICAgICAgIGxldCB1cGRhdGVCdXR0b25zID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLmNsYXNzZXMudXBkYXRlQnV0dG9uKTtcbiAgICAgICAgdGhpcy5sb2coJ0luaXQgdXBkYXRlIGJ1dHRvbihzKSwgZm91bmQgOiAnLCB1cGRhdGVCdXR0b25zLmxlbmd0aClcbiAgICAgICAgZm9yIChsZXQgdXBkYXRlQnV0dG9uIG9mIHVwZGF0ZUJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFVwZGF0ZUJ1dHRvbih1cGRhdGVCdXR0b24sIGpzb25Db250ZW50LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbCByZW1vdmUgVUkgRWxlbWVudCBvbiBjbGljayBhZnRlciBjb25maXJtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsZXRlQnV0dG9uXG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIGluaXREZWxldGVCdXR0b24oZGVsZXRlQnV0dG9uLCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBDb25maXJtYXRpb24gZm9yIGRlbGV0ZVxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oX3NlbGYudHJhbnNsYXRpb25zLmNvbmZpcm1fZGVsZXRlKSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiBjbGlja2VkIGJ1dHRvblxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VG9SZW1vdmUgPSBkZWxldGVCdXR0b24uY2xvc2VzdCgnLicgKyBfc2VsZi5jbGFzc2VzLmRyYWdnYWJsZUl0ZW0pO1xuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGxldCByZW1vdmVkSW5kZXggPSBfc2VsZi5nZXRFbGVtZW50SW5kZXgoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBpbmRleCBmb3VuZCBhbmQgZWxlbWVudCBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZEluZGV4ID09PSBmYWxzZSB8fCB0eXBlb2YganNvbkNvbnRlbnRbcmVtb3ZlZEluZGV4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuZXJyb3IoJ0Nhbm5vdCBmaW5kIFVJIEVsZW1lbnQgaW4gaW5kZXgnLCB7aW5kZXg6IHJlbW92ZWRJbmRleCwganNvbkNvbnRlbnQ6IGpzb25Db250ZW50fSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlVWlFbGVtZW50KHJlbW92ZWRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgY29udHJvbGxlciB0byBsb2FkIGFuZCBkaXNwbGF5IGZvcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cGRhdGVCdXR0b25cbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgaW5pdFVwZGF0ZUJ1dHRvbih1cGRhdGVCdXR0b24sIGpzb25Db250ZW50LCB0YXJnZXQpIHtcbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgdXBkYXRlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiBjbGlja2VkIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1VwZGF0ZSA9IHVwZGF0ZUJ1dHRvbi5jbG9zZXN0KCcuJyArIF9zZWxmLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbSk7XG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGxldCB1cGRhdGVJbmRleCA9IF9zZWxmLmdldEVsZW1lbnRJbmRleChlbGVtZW50VG9VcGRhdGUpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaW5kZXggZm91bmQgYW5kIGVsZW1lbnQgZXhpc3RzXG4gICAgICAgICAgICBpZiAodXBkYXRlSW5kZXggPT09IGZhbHNlIHx8IHR5cGVvZiBqc29uQ29udGVudFt1cGRhdGVJbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuZXJyb3IoJ0Nhbm5vdCBmaW5kIFVJIEVsZW1lbnQgaW4gaW5kZXgnLCB7aW5kZXg6IHVwZGF0ZUluZGV4LCBqc29uQ29udGVudDoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdWlFbGVtZW50VG9VcGRhdGUgPSBqc29uQ29udGVudFt1cGRhdGVJbmRleF07XG4gICAgICAgICAgICBfc2VsZi5sb2coJ1VJIEVsZW1lbnQgdG8gdXBkYXRlJywgdWlFbGVtZW50VG9VcGRhdGUpO1xuICAgICAgICAgICAgX3NlbGYubG9hZEZvcm0odWlFbGVtZW50VG9VcGRhdGUsIHVwZGF0ZUluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgZm9ybSBmb3IgZ2l2ZW4gVUkgRWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHVpRWxlbWVudCBbe3R5cGU6IFwiVUkgRWxlbWVudCBUeXBlXCIsIGZpZWxkczoge319XVxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRJbmRleFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudFxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICBsb2FkRm9ybSh1aUVsZW1lbnQsIHVpRWxlbWVudEluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBET05FID0gNDsgLy8gcmVhZHlTdGF0ZSA0IG1lYW5zIHRoZSByZXF1ZXN0IGlzIGRvbmUuXG4gICAgICAgICAgICBjb25zdCBPSyA9IDIwMDsgLy8gc3RhdHVzIDIwMCBpcyBhIHN1Y2Nlc3NmdWwgcmV0dXJuLlxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBET05FKXtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gT0spIHtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYubG9nKCdMb2FkZWQgZm9ybScsIHtyZXNwb25zZTogeGhyLnJlc3BvbnNlVGV4dCwgeGhyOiB4aHJ9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgbW9kYWwgd2l0aCB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5yZW5kZXJNb2RhbCh4aHIucmVzcG9uc2VUZXh0LCB1aUVsZW1lbnQudHlwZSwgdWlFbGVtZW50SW5kZXgsIGpzb25Db250ZW50LCB0YXJnZXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYubG9nKCdFcnJvciBkdXJpbmcgbG9hZCBmb3JtJywge3N0YXR1czogeGhyLnN0YXR1cywgeGhyOiB4aHJ9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJhbXMgPSAnZGF0YT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHVpRWxlbWVudCkpO1xuICAgICAgICB4aHIub3BlbignUE9TVCcsIHRoaXMuZm9ybVJvdXRlLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZW5kKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBtb2RhbCB3aXRoIHRoZSBnaXZlbiBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRUeXBlXG4gICAgICogQHBhcmFtIHVpRWxlbWVudEluZGV4XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIHJlbmRlck1vZGFsKGh0bWwsIHVpRWxlbWVudFR5cGUsIHVpRWxlbWVudEluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gSW5pdCBtb2RhbFxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyB0aW5nbGUubW9kYWwoe1xuICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgc3RpY2t5Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlTWV0aG9kczogWydvdmVybGF5JywgJ2J1dHRvbicsICdlc2NhcGUnXSxcbiAgICAgICAgICAgIGNzc0NsYXNzOiBbdGhpcy5jbGFzc2VzLnJlbmRlcmVkTW9kYWxdLFxuICAgICAgICAgICAgY2xvc2VMYWJlbDogdGhpcy50cmFuc2xhdGlvbnMuY2xvc2UsXG4gICAgICAgICAgICBvbk9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9zZWxmLmluaXRXeXNpd3lnKG1vZGFsLm1vZGFsQm94Q29udGVudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbW9kYWxQcmltYXJ5QnV0dG9uQ2xhc3MgPSAndGluZ2xlLWJ0biB0aW5nbGUtYnRuLS1wcmltYXJ5IHRpbmdsZS1idG4tLXB1bGwtcmlnaHQnO1xuICAgICAgICBsZXQgbW9kYWxzZWNvbmRhcnlCdXR0b25DbGFzcyA9ICd0aW5nbGUtYnRuIHRpbmdsZS1idG4tLXNlY29uZGFyeSB0aW5nbGUtYnRuLS1wdWxsLXJpZ2h0JztcblxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZVJlbmRlciA9PT0gJ3N5bGl1cycpIHtcbiAgICAgICAgICAgIG1vZGFsUHJpbWFyeUJ1dHRvbkNsYXNzID0gJ3VpIGJ1dHRvbiBwcmltYXJ5IHRpbmdsZS1idG4tLXB1bGwtcmlnaHQnO1xuICAgICAgICAgICAgbW9kYWxzZWNvbmRhcnlCdXR0b25DbGFzcyA9ICd1aSBidXR0b24gdGluZ2xlLWJ0bi0tcHVsbC1yaWdodCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIGNvbnRlbnRcbiAgICAgICAgbW9kYWwuc2V0Q29udGVudChodG1sKTtcblxuICAgICAgICAvLyBJbml0IHRoZSBmb3JtIGluc2lkZSB0aGUgbW9kYWxcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmluaXRNb2RhbEZvcm0odWlFbGVtZW50VHlwZSwgdWlFbGVtZW50SW5kZXgsIGpzb25Db250ZW50LCB0YXJnZXQpO1xuXG4gICAgICAgIC8vIEJ1dHRvbiB0byBzdWJtaXRcbiAgICAgICAgbW9kYWwuYWRkRm9vdGVyQnRuKHRoaXMudHJhbnNsYXRpb25zLmFwcGx5X2NoYW5nZXMsIG1vZGFsUHJpbWFyeUJ1dHRvbkNsYXNzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZm9ybSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmb3JtLmRpc3BhdGNoRXZlbnQoX3NlbGYuZXZlbnRzLnVwZGF0ZUVsZW1lbnQobW9kYWwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3NlbGYubG9nKCdObyBmb3JtIHRvIHN1Ym1pdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdXR0b24gdG8gY2FuY2VsXG4gICAgICAgIG1vZGFsLmFkZEZvb3RlckJ0bih0aGlzLnRyYW5zbGF0aW9ucy5jYW5jZWxfY2hhbmdlcywgbW9kYWxzZWNvbmRhcnlCdXR0b25DbGFzcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGlzcGxheSB0aGUgbW9kYWxcbiAgICAgICAgbW9kYWwub3BlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZm9ybSBpbiBtb2RhbCBpZiBleGlzdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRUeXBlXG4gICAgICogQHBhcmFtIHVpRWxlbWVudEluZGV4XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gICAgICovXG4gICAgaW5pdE1vZGFsRm9ybSh1aUVsZW1lbnRUeXBlLCB1aUVsZW1lbnRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCkge1xuICAgICAgICAvLyBSZXRyaWV2ZSBmb3JtIGluIG1vZGFsXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmNsYXNzZXMucmVuZGVyZWRNb2RhbCArICcgZm9ybScpO1xuXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgbm8gZm9ybSBmb3VuZFxuICAgICAgICBpZiAoZm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgLy8gQWN0aW9ucyB0byBwZXJmb3JtIHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWRcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVFbGVtZW50JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVUkgRWxlbWVudCB0eXBlIHdlIHdhbnQgdG8gdXBkYXRlIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfc2VsZi51aUVsZW1lbnRzW3VpRWxlbWVudFR5cGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF9zZWxmLmVycm9yKCdDYW5ub3QgZmluZCBlbGVtZW50IG9mIHR5cGUgJywgdWlFbGVtZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIGVsZW1lbnRzIHdpdGggZm9ybSBkYXRhIGFuZCBtb2RhbCB0byBjbG9zZSBpdCBpZiBkYXRhIGlzIHZhbGlkXG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIF9zZWxmLnVwZGF0ZVdpdGhGb3JtRGF0YShmb3JtLCB1aUVsZW1lbnRUeXBlLCB1aUVsZW1lbnRJbmRleCwgbW9kYWwsIGpzb25Db250ZW50LCB0YXJnZXQpO1xuXG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHd5c2l3eWcgd2l0aCBmb3JtIGNvbnRlbnQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRhaW5lclxuICAgICAqL1xuICAgIGluaXRXeXNpd3lnKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhLnd5c2l3eWctZW5hYmxlZCcpO1xuXG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0YXJnZXRzKSB7XG4gICAgICAgICAgICAvLyBIaWRlIHRhcmdldGVkIGlucHV0XG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCB3eXNpd3lnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3eXNpd3lnQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BlbGwnKTtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHd5c2l3eWdDb250YWluZXIpO1xuXG4gICAgICAgICAgICAvLyBJbml0IHBlbGwgd3lzaXd5Z1xuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gaW5pdCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogd3lzaXd5Z0NvbnRhaW5lcixcblxuICAgICAgICAgICAgICAgIC8vIDxGdW5jdGlvbj4sIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBvdXRwdXQgaHRtbCwgdHJpZ2dlcmVkIGJ5IGVsZW1lbnQncyBgb25pbnB1dGAgZXZlbnRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IGh0bWxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gPHN0cmluZz4sIG9wdGlvbmFsLCBkZWZhdWx0ID0gJ2RpdidcbiAgICAgICAgICAgICAgICAvLyBJbnN0cnVjdHMgdGhlIGVkaXRvciB3aGljaCBlbGVtZW50IHRvIGluamVjdCB2aWEgdGhlIHJldHVybiBrZXlcbiAgICAgICAgICAgICAgICBkZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yOiAncCcsXG5cbiAgICAgICAgICAgICAgICAvLyA8QXJyYXlbc3RyaW5nIHwgT2JqZWN0XT4sIHN0cmluZyBpZiBvdmVyd3JpdGluZywgb2JqZWN0IGlmIGN1c3RvbWl6aW5nL2NyZWF0aW5nXG4gICAgICAgICAgICAgICAgLy8gYWN0aW9uLm5hbWU8c3RyaW5nPiAob25seSByZXF1aXJlZCBpZiBvdmVyd3JpdGluZylcbiAgICAgICAgICAgICAgICAvLyBhY3Rpb24uaWNvbjxzdHJpbmc+IChvcHRpb25hbCBpZiBvdmVyd3JpdGluZywgcmVxdWlyZWQgaWYgY3VzdG9tIGFjdGlvbilcbiAgICAgICAgICAgICAgICAvLyBhY3Rpb24udGl0bGU8c3RyaW5nPiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgLy8gYWN0aW9uLnJlc3VsdDxGdW5jdGlvbj4gKHJlcXVpcmVkKVxuICAgICAgICAgICAgICAgIC8vIFNwZWNpZnkgdGhlIGFjdGlvbnMgeW91IHNwZWNpZmljYWxseSB3YW50IChpbiBvcmRlcilcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICd1bmRlcmxpbmUnLFxuICAgICAgICAgICAgICAgICAgICAndWxpc3QnLFxuICAgICAgICAgICAgICAgICAgICAnb2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAnaGVhZGluZzEnLFxuICAgICAgICAgICAgICAgICAgICAnaGVhZGluZzInLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaGVhZGluZzMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJzxiPkg8c3ViPjM8L3N1Yj48L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSGVhZGluZyAzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogKCkgPT4gZXhlYygnZm9ybWF0QmxvY2snLCAnPGgzPicpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdsaW5rJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB3eXNpd3lnIHdpdGggaW5pdGlhbCBjb250ZW50XG4gICAgICAgICAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGVkaXRvci5jb250ZW50LmlubmVySFRNTCA9IGluaXRpYWxDb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIHdpdGggZm9ybSBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRUeXBlXG4gICAgICogQHBhcmFtIHVpRWxlbWVudEluZGV4XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIHVwZGF0ZVdpdGhGb3JtRGF0YShmb3JtLCB1aUVsZW1lbnRUeXBlLCB1aUVsZW1lbnRJbmRleCwgbW9kYWwsIGpzb25Db250ZW50LCB0YXJnZXQpIHtcbiAgICAgICAgLy8gQ29udmVydCBmb3JtIGRhdGEgdG8gYW4gYXJyYXlcbiAgICAgICAgY29uc3QgdXBkYXRlZEVsZW1lbnQgPSB0aGlzLmNvbnZlcnRGb3JtVG9FbGVtZW50KGZvcm0sIHVpRWxlbWVudFR5cGUsIG1vZGFsKTtcbiAgICAgICAgaWYgKHVwZGF0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmxvZygnUmV0cmlldmVkIGZvcm0gZWxlbWVudCcsIHt1cGRhdGVkRWxlbWVudDogdXBkYXRlZEVsZW1lbnR9KTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBVSSBFbGVtZW50XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVpRWxlbWVudCh1aUVsZW1lbnRJbmRleCwgdXBkYXRlZEVsZW1lbnQsIGpzb25Db250ZW50LCB0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2coJ0ludmFsaWQgZm9ybSwgbm8gZWxlbWVudCB1cGRhdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBmb3JtIHRvIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRUeXBlXG4gICAgICogQHBhcmFtIG1vZGFsXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGNvbnZlcnRGb3JtVG9FbGVtZW50KGZvcm0sIHVpRWxlbWVudFR5cGUsIG1vZGFsKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgZm9ybSBkYXRhXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1aUVsZW1lbnRUeXBlJywgdWlFbGVtZW50VHlwZSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXR1cm5lZCBlbGVtZW50XG4gICAgICAgIGxldCBlbGVtZW50ID0ge307XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBBSkFYIHJlcXVlc3RcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IERPTkUgPSA0OyAvLyByZWFkeVN0YXRlIDQgbWVhbnMgdGhlIHJlcXVlc3QgaXMgZG9uZS5cbiAgICAgICAgICAgIGNvbnN0IE9LID0gMjAwOyAvLyBzdGF0dXMgMjAwIGlzIGEgc3VjY2Vzc2Z1bCByZXR1cm4uXG4gICAgICAgICAgICBjb25zdCBGT1JNX0VSUk9SUyA9IDQwNjsgLy8gc3RhdHVzIDQwNiBpZiBmb3JtIGhhcyBlcnJvcnMuXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IERPTkUpe1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSBPSykge1xuICAgICAgICAgICAgICAgICAgICBfc2VsZi5sb2coJ0RhdGEgc2VudCBhbmQgdmFsaWRhdGVkJywge2Zvcm06IGZvcm0sIHJlc3BvbnNlOiB4aHIucmVzcG9uc2VUZXh0LCB4aHI6IHhocn0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSByZXNwb25zZS5lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHhoci5zdGF0dXMgPT09IEZPUk1fRVJST1JTKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLmxvZygnRm9ybSBub3QgdmFsaWQnLCB7Zm9ybTogZm9ybSwgcmVzcG9uc2U6IHhoci5yZXNwb25zZVRleHQsIHhocjogeGhyfSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZXJyb3JzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiByZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChmaWVsZCArICcgOiAnICsgcmVzcG9uc2UuZXJyb3JzW2ZpZWxkXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIG5vdCB1cGRhdGUgY3VycmVudCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfc2VsZi5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBkdXJpbmcgZmlsZSB1cGxvYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm06IGZvcm0sIHN0YXR1czogeGhyLnN0YXR1cywgeGhyOiB4aHJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYuZXJyb3JzVHJhbnNsYXRpb25zLmNhbm5vdFVwbG9hZEZpbGVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIG5vdCB1cGRhdGUgY3VycmVudCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2VuZCBkYXRhXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdGhpcy5zdWJtaXRSb3V0ZSwgZmFsc2UpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1hcmt1cCB0byBkaXNwbGF5IFVJIEVsZW1lbnQgbWV0YSBkYXRhIGRlcGVuZGluZyBvbiByZW5kZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIHVpRWxlbWVudE1ldGFEYXRhIHtzaG9ydF9kZXNjcmlwdGlvbjogXCJTaG9ydCBkZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLCB0aXRsZTogXCJUaXRsZVwiLCBpbWFnZTogXCIvcGF0aC90by9pbWFnZS5qcGdcIn1cbiAgICAgKi9cbiAgICByZW5kZXJVaUVsZW1lbnRNZXRhRGF0YSh0eXBlLCB1aUVsZW1lbnRNZXRhRGF0YSkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbX1cIiBkYXRhLXVpLWVsZW1lbnQtdHlwZT1cIiR7dHlwZX1cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtSGFuZGxlcn1cIiB0eXBlPVwiYnV0dG9uXCI+JHt0aGlzLnRyYW5zbGF0aW9ucy5tb3ZlfTwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmRyYWdnYWJsZUl0ZW1Jbm5lcn1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbUltZ31cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3VpRWxlbWVudE1ldGFEYXRhLmltYWdlfVwiIGFsdD1cIlwiIHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCI5MFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtQ29udGVudH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmRyYWdnYWJsZUl0ZW1JbmZvc31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmRyYWdnYWJsZUl0ZW1UaXRsZX1cIj4ke3VpRWxlbWVudE1ldGFEYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3VpRWxlbWVudE1ldGFEYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtQWN0aW9uc31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtQnV0dG9ufSAke3RoaXMuY2xhc3Nlcy51cGRhdGVCdXR0b259XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9vbHRpcD1cIiR7dGhpcy50cmFuc2xhdGlvbnMuZWRpdH1cIj4ke3RoaXMudHJhbnNsYXRpb25zLmVkaXR9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbUJ1dHRvbn0gJHt0aGlzLmNsYXNzZXMuZGVsZXRlQnV0dG9ufVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvb2x0aXA9XCIke3RoaXMudHJhbnNsYXRpb25zLmRlbGV0ZX1cIj4ke3RoaXMudHJhbnNsYXRpb25zLmRlbGV0ZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1hcmt1cCB0byBkaXNwbGF5IGFjdGlvbiBidXR0b25zXG4gICAgICovXG4gICAgcmVuZGVyQWN0aW9uc0J1dHRvbnModGVtcGxhdGVSZW5kZXIpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlUmVuZGVyID09PSAnc3lsaXVzJykge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBwcmltYXJ5IGJ1dHRvbiAke3RoaXMuY2xhc3Nlcy50b2dnbGVCdXR0b259XCIgdHlwZT1cImJ1dHRvblwiPiR7dGhpcy50cmFuc2xhdGlvbnMubmV3fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcignQ2Fubm90IGZpbmQgcmVuZGVyIGZvciA6ICcsIHRlbXBsYXRlUmVuZGVyKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZHJhZ2dhYmxlIGVsZW1lbnRzIGZvciBhIGNvbnRhaW5lclxuICAgICAqXG4gICAgICogQHBhcmFtIHVpRWxlbWVudHNcbiAgICAgKiBAcGFyYW0gZWxlbWVudHNDb250YWluZXJcbiAgICAgKi9cbiAgICBpbml0UmVvcmRlcih1aUVsZW1lbnRzLCBlbGVtZW50c0NvbnRhaW5lcikge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICAvLyBGaXJzdCBjb250YWluZXIgaXMgdGhlIGxpc3Qgb2YgVUkgRWxlbWVudHMgd2UgY2FuIGFkZCwgdGhlIHNlY29uZCBpcyB0aGUgY29udGVudCBvZiB0aGUgZmllbGRcbiAgICAgICAgLy8gV2UgY2FuIG9ubHkgbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBgdWlFbGVtZW50c2AgdG8gdGhlIGBlbGVtZW50c0NvbnRhaW5lcmBcbiAgICAgICAgbGV0IGRyYWtlID0gbmV3IGRyYWd1bGEoW3VpRWxlbWVudHMsIGVsZW1lbnRzQ29udGFpbmVyXSwge1xuICAgICAgICAgICAgY29weTogZnVuY3Rpb24gKGVsLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlID09PSB1aUVsZW1lbnRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZXB0czogZnVuY3Rpb24gKGVsLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSB1aUVsZW1lbnRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZXM6IGZ1bmN0aW9uIChlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhfc2VsZi5jbGFzc2VzLmRyYWdnYWJsZUl0ZW1IYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkcmFrZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGV2ZW50IHRvIGJlIGFibGUgdG8gcmVvcmRlciBlbGVtZW50cyBpbiBpdCdzIGZpZWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHJha2VcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICovXG4gICAgaW5pdFJlb3JkZXJFdmVudChkcmFrZSwgdGFyZ2V0LCBqc29uQ29udGVudCkge1xuICAgICAgICBkcmFrZS5vbignZHJhZycsIChlbCwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW9yZGVyIGluc2lkZSB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHNvdXJjZS5pZCAhPT0gdGhpcy5pZC51aUVsZW1lbnRzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEVsZW1lbnRJbmRleChlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZygnUmVvcmRlciBkcmFnIHN0YXJ0IDogJywge2luZGV4OiBpbmRleCwgZWw6IGVsLCBzb3VyY2U6IHNvdXJjZX0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGEgbmV3IGVsZW1lbnQgZnJvbSB0b3BcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaWQgPT09IHRoaXMuaWQudWlFbGVtZW50c0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nKCdDb3B5IGRyYWcgc3RhcnQgOiAnLCB7ZWw6IGVsLCBzb3VyY2U6IHNvdXJjZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZHJha2Uub24oJ2Ryb3AnLCAoZWwsIHRhcmdldEVsZW1lbnQsIHNvdXJjZSwgc2libGluZykgPT4ge1xuICAgICAgICAgICAgLy8gUmVvcmRlciBpbnNpZGUgdGhlIGxpc3RcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaWQgIT09IHRoaXMuaWQudWlFbGVtZW50c0NvbnRhaW5lcklubmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZ2V0RWxlbWVudEluZGV4KGVsKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3SW5kZXggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKCdSZW9yZGVyIGRyYWcgc3RvcCA6ICcsIHtvbGRJbmRleDogb2xkSW5kZXgsIG5ld0luZGV4OiBuZXdJbmRleCwgZWw6IGVsLCB0YXJnZXRFbGVtZW50OiB0YXJnZXRFbGVtZW50LCBzb3VyY2U6IHNvdXJjZSwgc2libGluZzogc2libGluZ30pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVVaUVsZW1lbnQob2xkSW5kZXgsIG5ld0luZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGEgbmV3IGVsZW1lbnQgZnJvbSB0b3AgdG8gVWkgRWxlbWVudCBsaXN0XG4gICAgICAgICAgICBpZiAoc291cmNlLmlkID09PSB0aGlzLmlkLnVpRWxlbWVudHNDb250YWluZXJJbm5lciAmJiB0YXJnZXRFbGVtZW50ICE9PSBudWxsICYmIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy51aUVsZW1lbnRMaXN0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nKCdDb3B5IGRyYWcgc3RvcCA6ICcsIHtlbDogZWwsIHRhcmdldEVsZW1lbnQ6IHRhcmdldEVsZW1lbnQsIHNvdXJjZTogc291cmNlLCBzaWJsaW5nOiBzaWJsaW5nfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmdldEVsZW1lbnRJbmRleChlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGVsLmRhdGFzZXQudWlFbGVtZW50VHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVWlFbGVtZW50KHR5cGUsIG5ld0luZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIGB1aUVsZW1lbnRUeXBlYCB0byBhZGQgaW4gZGF0YSBzZXQnLCB7ZGF0YVNldDogZWwuZGF0YXNldCwgZWw6IGVsfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgaW5kZXggb2YgZWxlbWVudCBpbiBVSSBFbGVtZW50cyBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0RWxlbWVudEluZGV4KGVsKSB7XG4gICAgICAgIGlmICghZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGVsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmluZGV4T2YoZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgSlNPTiB0byBhZGQgYW4gVUkgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgYWRkVWlFbGVtZW50KHR5cGUsIGluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMubG9nKCdBZGQgVUkgRWxlbWVudCA6ICcsIHt0eXBlOiB0eXBlLCBpbmRleDogaW5kZXgsIHRhcmdldDogdGFyZ2V0LCBiZWZvcmVNb3ZlSnNvbjoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBuZXcgVUkgRWxlbWVudCBvZiB3YW50ZWQgdHlwZVxuICAgICAgICBsZXQgdWlFbGVtZW50ID0ge3R5cGU6IHR5cGUsIGZpZWxkczoge319O1xuICAgICAgICAvLyBBZGQgdGhlIGVsZW1lbnQgaW4gSlNPTlxuICAgICAgICBqc29uQ29udGVudC5zcGxpY2UoaW5kZXgsIDAsIHVpRWxlbWVudCk7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dGFyZWEgd2l0aCBKU09OXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb25Db250ZW50KTtcbiAgICAgICAgdGhpcy5sb2coJ0FkZGVkIFVJIEVsZW1lbnQgOiAnLCB7YWZ0ZXJNb3ZlSnNvbjoganNvbkNvbnRlbnQsIG5ld1RhcmdldFZhbHVlOiB0YXJnZXQudmFsdWV9KTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhY3Rpb25zIGZvciB0aGUgbmV3IFVJIEVsZW1lbnQsIGl0IGFjdHVhbGx5IHJlY3JlYXRlIGFsc28gZXZlbnRzIGZvciBleGlzdGluZyBlbGVtZW50c1xuICAgICAgICB0aGlzLmluaXRBY3Rpb25zKHRhcmdldCwganNvbkNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgSlNPTiB0byBtb3ZlIFVJIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2xkSW5kZXhcbiAgICAgKiBAcGFyYW0gbmV3SW5kZXhcbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgbW92ZVVpRWxlbWVudChvbGRJbmRleCwgbmV3SW5kZXgsIGpzb25Db250ZW50LCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKG9sZEluZGV4ICE9PSBuZXdJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5sb2coJ01vdmUgVUkgRWxlbWVudCA6ICcsIHtvbGRJbmRleDogb2xkSW5kZXgsIG5ld0luZGV4OiBuZXdJbmRleCwgdGFyZ2V0OiB0YXJnZXQsIGJlZm9yZU1vdmVKc29uOiBqc29uQ29udGVudH0pO1xuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IGpzb25Db250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ0VsZW1lbnQgbW92ZWQgb3V0c2lkZSB0aGUgbGlzdCcsIHtuZXdJbmRleDogbmV3SW5kZXgsIHNpemVMaXN0OiBqc29uQ29udGVudC5sZW5ndGh9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTW92ZSB0aGUgVUkgZWxlbWVudCB0byB0aGUgc2VsZWN0ZWQgaW5kZXggYW5kIGNoYW5nZSBwb3NpdGlvbiBvZiBvdGhlcnNcbiAgICAgICAgICAgIGpzb25Db250ZW50LnNwbGljZShuZXdJbmRleCwgMCwganNvbkNvbnRlbnQuc3BsaWNlKG9sZEluZGV4LCAxKVswXSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHRhcmVhIHdpdGggSlNPTlxuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoanNvbkNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ01vdmVkIFVJIEVsZW1lbnQgOiAnLCB7YWZ0ZXJNb3ZlSnNvbjoganNvbkNvbnRlbnQsIG5ld1RhcmdldFZhbHVlOiB0YXJnZXQudmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdOb3QgbW92ZWQgVUkgRWxlbWVudCwgc2FtZSBpbmRleCcsIHtvbGRJbmRleDogb2xkSW5kZXgsIG5ld0luZGV4OiBuZXdJbmRleCwgdGFyZ2V0OiB0YXJnZXQsIGJlZm9yZU1vdmVKc29uOiBqc29uQ29udGVudH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBKU09OIGZvciBhIGdpdmVuIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIHVwZGF0ZVVpRWxlbWVudChpbmRleCwgZWxlbWVudCwganNvbkNvbnRlbnQsIHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIGpzb25Db250ZW50W2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdVcGRhdGUgVUkgRWxlbWVudCA6ICcsIHtpbmRleDogaW5kZXgsIGVsZW1lbnQ6IGVsZW1lbnQsIGpzb25Db250ZW50OiBqc29uQ29udGVudCwgdGFyZ2V0OiB0YXJnZXR9KTtcbiAgICAgICAgICAgIC8vIFNldCBuZXcgY29udGVudCBmb3IgVUkgRWxlbWVudFxuICAgICAgICAgICAganNvbkNvbnRlbnRbaW5kZXhdID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dGFyZWEgd2l0aCBKU09OXG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uQ29udGVudCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnVXBkYXRlZCBVSSBFbGVtZW50IDogJywge2luZGV4OiBpbmRleCwgZWxlbWVudDogZWxlbWVudCwganNvbkNvbnRlbnQ6IGpzb25Db250ZW50LCB0YXJnZXQ6IHRhcmdldH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcignQ2Fubm90IGZvdW5kIGVsZW1lbnQgZm9yIGluZGV4Jywge2luZGV4OiBpbmRleCwgZWxlbWVudDogZWxlbWVudCwganNvbkNvbnRlbnQ6IGpzb25Db250ZW50LCB0YXJnZXQ6IHRhcmdldH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIEpTT04gdG8gcmVtb3ZlIFVJIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZW1vdmVkSW5kZXhcbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgcmVtb3ZlVWlFbGVtZW50KHJlbW92ZWRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCkge1xuICAgICAgICB0aGlzLmxvZygnUmVtb3ZlIFVJIEVsZW1lbnQgOiAnLCB7cmVtb3ZlZEluZGV4OiByZW1vdmVkSW5kZXgsIHRhcmdldDogdGFyZ2V0LCBiZWZvcmVNb3ZlSnNvbjoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbGVtZW50IGZvciB0aGlzIGluZGV4LCBpdCB3aWxsIGNoYW5nZSBpbmRleGVzIGZvciBvdGhlciBlbGVtZW50cyB0b29cbiAgICAgICAganNvbkNvbnRlbnQuc3BsaWNlKHJlbW92ZWRJbmRleCwgMSk7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dGFyZWEgd2l0aCBKU09OXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb25Db250ZW50KTtcbiAgICAgICAgdGhpcy5sb2coJ1JlbW92ZWQgVUkgRWxlbWVudCA6ICcsIHthZnRlck1vdmVKc29uOiBqc29uQ29udGVudCwgbmV3VGFyZ2V0VmFsdWU6IHRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb25zb2xlIGVycm9yIGlmIGRlYnVnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0gY29udGVudFxuICAgICAqIEBwYXJhbSBkaXNwbGF5ZWRFcnJvclxuICAgICAqIEBwYXJhbSByZXNldFJpY2hGaWVsZFxuICAgICAqL1xuICAgIGVycm9yKGRlc2NyaXB0aW9uLCBjb250ZW50LCBkaXNwbGF5ZWRFcnJvciA9IG51bGwsIHJlc2V0UmljaEZpZWxkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHJlc2V0UmljaEZpZWxkKSB7XG4gICAgICAgICAgICAvLyBJZiBlcnJvciwgZGlzcGxheSBvcmlnaW5hbCBmaWVsZHNcbiAgICAgICAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnRhcmdldHMpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGdlbmVyYXRlZCBibG9ja3NcbiAgICAgICAgICAgIGZvciAobGV0IHRhcmdldCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuY2xhc3Nlcy51aUVsZW1lbnRMaXN0KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc3BsYXkgZXJyb3IgaW4gY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihjb250ZW50KTtcblxuICAgICAgICAvLyBEaXNwbGF5IGVycm9yIGZvciB1c2VyIGlmIG1lc3NhZ2UgZXhpc3RzXG4gICAgICAgIGlmIChkaXNwbGF5ZWRFcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZGlzcGxheWVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbnNvbGUgbG9nIGlmIGRlYnVnIGlzIHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSBjb250ZW50XG4gICAgICovXG4gICAgbG9nKGRlc2NyaXB0aW9uLCBjb250ZW50KSB7XG4gICAgICAgIC8vIERpc3BsYXkgbWVzc2FnZSBmb3IgZGVidWcgbW9kZVxuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gSW5pdCB0aGUgcGx1Z2luXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCByaWNoRWRpdG9yID0gbmV3IE1iaXpSaWNoRWRpdG9yRmllbGRzKG1vbnNpZXVyYml6UmljaEVkaXRvclBsdWdpbkNvbmZpZyk7XG4gICAgcmljaEVkaXRvci5pbml0KCk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXRvYSAoYSwgbikgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwgbik7IH1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRpY2t5ID0gcmVxdWlyZSgndGlja3knKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWJvdW5jZSAoZm4sIGFyZ3MsIGN0eCkge1xuICBpZiAoIWZuKSB7IHJldHVybjsgfVxuICB0aWNreShmdW5jdGlvbiBydW4gKCkge1xuICAgIGZuLmFwcGx5KGN0eCB8fCBudWxsLCBhcmdzIHx8IFtdKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXRvYSA9IHJlcXVpcmUoJ2F0b2EnKTtcbnZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbWl0dGVyICh0aGluZywgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBldnQgPSB7fTtcbiAgaWYgKHRoaW5nID09PSB1bmRlZmluZWQpIHsgdGhpbmcgPSB7fTsgfVxuICB0aGluZy5vbiA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIGlmICghZXZ0W3R5cGVdKSB7XG4gICAgICBldnRbdHlwZV0gPSBbZm5dO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnRbdHlwZV0ucHVzaChmbik7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbiAgfTtcbiAgdGhpbmcub25jZSA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIGZuLl9vbmNlID0gdHJ1ZTsgLy8gdGhpbmcub2ZmKGZuKSBzdGlsbCB3b3JrcyFcbiAgICB0aGluZy5vbih0eXBlLCBmbik7XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9O1xuICB0aGluZy5vZmYgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGMgPT09IDEpIHtcbiAgICAgIGRlbGV0ZSBldnRbdHlwZV07XG4gICAgfSBlbHNlIGlmIChjID09PSAwKSB7XG4gICAgICBldnQgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGV0ID0gZXZ0W3R5cGVdO1xuICAgICAgaWYgKCFldCkgeyByZXR1cm4gdGhpbmc7IH1cbiAgICAgIGV0LnNwbGljZShldC5pbmRleE9mKGZuKSwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbiAgfTtcbiAgdGhpbmcuZW1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IGF0b2EoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdGhpbmcuZW1pdHRlclNuYXBzaG90KGFyZ3Muc2hpZnQoKSkuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG4gIHRoaW5nLmVtaXR0ZXJTbmFwc2hvdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgdmFyIGV0ID0gKGV2dFt0eXBlXSB8fCBbXSkuc2xpY2UoMCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gYXRvYShhcmd1bWVudHMpO1xuICAgICAgdmFyIGN0eCA9IHRoaXMgfHwgdGhpbmc7XG4gICAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJyAmJiBvcHRzLnRocm93cyAhPT0gZmFsc2UgJiYgIWV0Lmxlbmd0aCkgeyB0aHJvdyBhcmdzLmxlbmd0aCA9PT0gMSA/IGFyZ3NbMF0gOiBhcmdzOyB9XG4gICAgICBldC5mb3JFYWNoKGZ1bmN0aW9uIGVtaXR0ZXIgKGxpc3Rlbikge1xuICAgICAgICBpZiAob3B0cy5hc3luYykgeyBkZWJvdW5jZShsaXN0ZW4sIGFyZ3MsIGN0eCk7IH0gZWxzZSB7IGxpc3Rlbi5hcHBseShjdHgsIGFyZ3MpOyB9XG4gICAgICAgIGlmIChsaXN0ZW4uX29uY2UpIHsgdGhpbmcub2ZmKHR5cGUsIGxpc3Rlbik7IH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIH07XG4gIH07XG4gIHJldHVybiB0aGluZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjdXN0b21FdmVudCA9IHJlcXVpcmUoJ2N1c3RvbS1ldmVudCcpO1xudmFyIGV2ZW50bWFwID0gcmVxdWlyZSgnLi9ldmVudG1hcCcpO1xudmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbnZhciBhZGRFdmVudCA9IGFkZEV2ZW50RWFzeTtcbnZhciByZW1vdmVFdmVudCA9IHJlbW92ZUV2ZW50RWFzeTtcbnZhciBoYXJkQ2FjaGUgPSBbXTtcblxuaWYgKCFnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICBhZGRFdmVudCA9IGFkZEV2ZW50SGFyZDtcbiAgcmVtb3ZlRXZlbnQgPSByZW1vdmVFdmVudEhhcmQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQ6IGFkZEV2ZW50LFxuICByZW1vdmU6IHJlbW92ZUV2ZW50LFxuICBmYWJyaWNhdGU6IGZhYnJpY2F0ZUV2ZW50XG59O1xuXG5mdW5jdGlvbiBhZGRFdmVudEVhc3kgKGVsLCB0eXBlLCBmbiwgY2FwdHVyaW5nKSB7XG4gIHJldHVybiBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBjYXB0dXJpbmcpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudEhhcmQgKGVsLCB0eXBlLCBmbikge1xuICByZXR1cm4gZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIHdyYXAoZWwsIHR5cGUsIGZuKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50RWFzeSAoZWwsIHR5cGUsIGZuLCBjYXB0dXJpbmcpIHtcbiAgcmV0dXJuIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGNhcHR1cmluZyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50SGFyZCAoZWwsIHR5cGUsIGZuKSB7XG4gIHZhciBsaXN0ZW5lciA9IHVud3JhcChlbCwgdHlwZSwgZm4pO1xuICBpZiAobGlzdGVuZXIpIHtcbiAgICByZXR1cm4gZWwuZGV0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmYWJyaWNhdGVFdmVudCAoZWwsIHR5cGUsIG1vZGVsKSB7XG4gIHZhciBlID0gZXZlbnRtYXAuaW5kZXhPZih0eXBlKSA9PT0gLTEgPyBtYWtlQ3VzdG9tRXZlbnQoKSA6IG1ha2VDbGFzc2ljRXZlbnQoKTtcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGUpO1xuICB9IGVsc2Uge1xuICAgIGVsLmZpcmVFdmVudCgnb24nICsgdHlwZSwgZSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUNsYXNzaWNFdmVudCAoKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKGRvYy5jcmVhdGVFdmVudCkge1xuICAgICAgZSA9IGRvYy5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGUuaW5pdEV2ZW50KHR5cGUsIHRydWUsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KSB7XG4gICAgICBlID0gZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VDdXN0b21FdmVudCAoKSB7XG4gICAgcmV0dXJuIG5ldyBjdXN0b21FdmVudCh0eXBlLCB7IGRldGFpbDogbW9kZWwgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcHBlckZhY3RvcnkgKGVsLCB0eXBlLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlciAob3JpZ2luYWxFdmVudCkge1xuICAgIHZhciBlID0gb3JpZ2luYWxFdmVudCB8fCBnbG9iYWwuZXZlbnQ7XG4gICAgZS50YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCA9IGUucHJldmVudERlZmF1bHQgfHwgZnVuY3Rpb24gcHJldmVudERlZmF1bHQgKCkgeyBlLnJldHVyblZhbHVlID0gZmFsc2U7IH07XG4gICAgZS5zdG9wUHJvcGFnYXRpb24gPSBlLnN0b3BQcm9wYWdhdGlvbiB8fCBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24gKCkgeyBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7IH07XG4gICAgZS53aGljaCA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xuICAgIGZuLmNhbGwoZWwsIGUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cmFwIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIHdyYXBwZXIgPSB1bndyYXAoZWwsIHR5cGUsIGZuKSB8fCB3cmFwcGVyRmFjdG9yeShlbCwgdHlwZSwgZm4pO1xuICBoYXJkQ2FjaGUucHVzaCh7XG4gICAgd3JhcHBlcjogd3JhcHBlcixcbiAgICBlbGVtZW50OiBlbCxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGZuOiBmblxuICB9KTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIHVud3JhcCAoZWwsIHR5cGUsIGZuKSB7XG4gIHZhciBpID0gZmluZChlbCwgdHlwZSwgZm4pO1xuICBpZiAoaSkge1xuICAgIHZhciB3cmFwcGVyID0gaGFyZENhY2hlW2ldLndyYXBwZXI7XG4gICAgaGFyZENhY2hlLnNwbGljZShpLCAxKTsgLy8gZnJlZSB1cCBhIHRhZCBvZiBtZW1vcnlcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIGksIGl0ZW07XG4gIGZvciAoaSA9IDA7IGkgPCBoYXJkQ2FjaGUubGVuZ3RoOyBpKyspIHtcbiAgICBpdGVtID0gaGFyZENhY2hlW2ldO1xuICAgIGlmIChpdGVtLmVsZW1lbnQgPT09IGVsICYmIGl0ZW0udHlwZSA9PT0gdHlwZSAmJiBpdGVtLmZuID09PSBmbikge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBldmVudG1hcCA9IFtdO1xudmFyIGV2ZW50bmFtZSA9ICcnO1xudmFyIHJvbiA9IC9eb24vO1xuXG5mb3IgKGV2ZW50bmFtZSBpbiBnbG9iYWwpIHtcbiAgaWYgKHJvbi50ZXN0KGV2ZW50bmFtZSkpIHtcbiAgICBldmVudG1hcC5wdXNoKGV2ZW50bmFtZS5zbGljZSgyKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudG1hcDtcbiIsIlxudmFyIE5hdGl2ZUN1c3RvbUV2ZW50ID0gZ2xvYmFsLkN1c3RvbUV2ZW50O1xuXG5mdW5jdGlvbiB1c2VOYXRpdmUgKCkge1xuICB0cnkge1xuICAgIHZhciBwID0gbmV3IE5hdGl2ZUN1c3RvbUV2ZW50KCdjYXQnLCB7IGRldGFpbDogeyBmb286ICdiYXInIH0gfSk7XG4gICAgcmV0dXJuICAnY2F0JyA9PT0gcC50eXBlICYmICdiYXInID09PSBwLmRldGFpbC5mb287XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ3Jvc3MtYnJvd3NlciBgQ3VzdG9tRXZlbnRgIGNvbnN0cnVjdG9yLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC5DdXN0b21FdmVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZU5hdGl2ZSgpID8gTmF0aXZlQ3VzdG9tRXZlbnQgOlxuXG4vLyBJRSA+PSA5XG4nZnVuY3Rpb24nID09PSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRXZlbnQgPyBmdW5jdGlvbiBDdXN0b21FdmVudCAodHlwZSwgcGFyYW1zKSB7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGlmIChwYXJhbXMpIHtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICB9IGVsc2Uge1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSwgdm9pZCAwKTtcbiAgfVxuICByZXR1cm4gZTtcbn0gOlxuXG4vLyBJRSA8PSA4XG5mdW5jdGlvbiBDdXN0b21FdmVudCAodHlwZSwgcGFyYW1zKSB7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgZS50eXBlID0gdHlwZTtcbiAgaWYgKHBhcmFtcykge1xuICAgIGUuYnViYmxlcyA9IEJvb2xlYW4ocGFyYW1zLmJ1YmJsZXMpO1xuICAgIGUuY2FuY2VsYWJsZSA9IEJvb2xlYW4ocGFyYW1zLmNhbmNlbGFibGUpO1xuICAgIGUuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgfSBlbHNlIHtcbiAgICBlLmJ1YmJsZXMgPSBmYWxzZTtcbiAgICBlLmNhbmNlbGFibGUgPSBmYWxzZTtcbiAgICBlLmRldGFpbCA9IHZvaWQgMDtcbiAgfVxuICByZXR1cm4gZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhY2hlID0ge307XG52YXIgc3RhcnQgPSAnKD86XnxcXFxccyknO1xudmFyIGVuZCA9ICcoPzpcXFxcc3wkKSc7XG5cbmZ1bmN0aW9uIGxvb2t1cENsYXNzIChjbGFzc05hbWUpIHtcbiAgdmFyIGNhY2hlZCA9IGNhY2hlW2NsYXNzTmFtZV07XG4gIGlmIChjYWNoZWQpIHtcbiAgICBjYWNoZWQubGFzdEluZGV4ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjYWNoZVtjbGFzc05hbWVdID0gY2FjaGVkID0gbmV3IFJlZ0V4cChzdGFydCArIGNsYXNzTmFtZSArIGVuZCwgJ2cnKTtcbiAgfVxuICByZXR1cm4gY2FjaGVkO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNsYXNzTmFtZSkge1xuICB2YXIgY3VycmVudCA9IGVsLmNsYXNzTmFtZTtcbiAgaWYgKCFjdXJyZW50Lmxlbmd0aCkge1xuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgfSBlbHNlIGlmICghbG9va3VwQ2xhc3MoY2xhc3NOYW1lKS50ZXN0KGN1cnJlbnQpKSB7XG4gICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBybUNsYXNzIChlbCwgY2xhc3NOYW1lKSB7XG4gIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKGxvb2t1cENsYXNzKGNsYXNzTmFtZSksICcgJykudHJpbSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkOiBhZGRDbGFzcyxcbiAgcm06IHJtQ2xhc3Ncbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbWl0dGVyID0gcmVxdWlyZSgnY29udHJhL2VtaXR0ZXInKTtcbnZhciBjcm9zc3ZlbnQgPSByZXF1aXJlKCdjcm9zc3ZlbnQnKTtcbnZhciBjbGFzc2VzID0gcmVxdWlyZSgnLi9jbGFzc2VzJyk7XG52YXIgZG9jID0gZG9jdW1lbnQ7XG52YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuZnVuY3Rpb24gZHJhZ3VsYSAoaW5pdGlhbENvbnRhaW5lcnMsIG9wdGlvbnMpIHtcbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDEgJiYgQXJyYXkuaXNBcnJheShpbml0aWFsQ29udGFpbmVycykgPT09IGZhbHNlKSB7XG4gICAgb3B0aW9ucyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgIGluaXRpYWxDb250YWluZXJzID0gW107XG4gIH1cbiAgdmFyIF9taXJyb3I7IC8vIG1pcnJvciBpbWFnZVxuICB2YXIgX3NvdXJjZTsgLy8gc291cmNlIGNvbnRhaW5lclxuICB2YXIgX2l0ZW07IC8vIGl0ZW0gYmVpbmcgZHJhZ2dlZFxuICB2YXIgX29mZnNldFg7IC8vIHJlZmVyZW5jZSB4XG4gIHZhciBfb2Zmc2V0WTsgLy8gcmVmZXJlbmNlIHlcbiAgdmFyIF9tb3ZlWDsgLy8gcmVmZXJlbmNlIG1vdmUgeFxuICB2YXIgX21vdmVZOyAvLyByZWZlcmVuY2UgbW92ZSB5XG4gIHZhciBfaW5pdGlhbFNpYmxpbmc7IC8vIHJlZmVyZW5jZSBzaWJsaW5nIHdoZW4gZ3JhYmJlZFxuICB2YXIgX2N1cnJlbnRTaWJsaW5nOyAvLyByZWZlcmVuY2Ugc2libGluZyBub3dcbiAgdmFyIF9jb3B5OyAvLyBpdGVtIHVzZWQgZm9yIGNvcHlpbmdcbiAgdmFyIF9yZW5kZXJUaW1lcjsgLy8gdGltZXIgZm9yIHNldFRpbWVvdXQgcmVuZGVyTWlycm9ySW1hZ2VcbiAgdmFyIF9sYXN0RHJvcFRhcmdldCA9IG51bGw7IC8vIGxhc3QgY29udGFpbmVyIGl0ZW0gd2FzIG92ZXJcbiAgdmFyIF9ncmFiYmVkOyAvLyBob2xkcyBtb3VzZWRvd24gY29udGV4dCB1bnRpbCBmaXJzdCBtb3VzZW1vdmVcblxuICB2YXIgbyA9IG9wdGlvbnMgfHwge307XG4gIGlmIChvLm1vdmVzID09PSB2b2lkIDApIHsgby5tb3ZlcyA9IGFsd2F5czsgfVxuICBpZiAoby5hY2NlcHRzID09PSB2b2lkIDApIHsgby5hY2NlcHRzID0gYWx3YXlzOyB9XG4gIGlmIChvLmludmFsaWQgPT09IHZvaWQgMCkgeyBvLmludmFsaWQgPSBpbnZhbGlkVGFyZ2V0OyB9XG4gIGlmIChvLmNvbnRhaW5lcnMgPT09IHZvaWQgMCkgeyBvLmNvbnRhaW5lcnMgPSBpbml0aWFsQ29udGFpbmVycyB8fCBbXTsgfVxuICBpZiAoby5pc0NvbnRhaW5lciA9PT0gdm9pZCAwKSB7IG8uaXNDb250YWluZXIgPSBuZXZlcjsgfVxuICBpZiAoby5jb3B5ID09PSB2b2lkIDApIHsgby5jb3B5ID0gZmFsc2U7IH1cbiAgaWYgKG8uY29weVNvcnRTb3VyY2UgPT09IHZvaWQgMCkgeyBvLmNvcHlTb3J0U291cmNlID0gZmFsc2U7IH1cbiAgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdm9pZCAwKSB7IG8ucmV2ZXJ0T25TcGlsbCA9IGZhbHNlOyB9XG4gIGlmIChvLnJlbW92ZU9uU3BpbGwgPT09IHZvaWQgMCkgeyBvLnJlbW92ZU9uU3BpbGwgPSBmYWxzZTsgfVxuICBpZiAoby5kaXJlY3Rpb24gPT09IHZvaWQgMCkgeyBvLmRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7IH1cbiAgaWYgKG8uaWdub3JlSW5wdXRUZXh0U2VsZWN0aW9uID09PSB2b2lkIDApIHsgby5pZ25vcmVJbnB1dFRleHRTZWxlY3Rpb24gPSB0cnVlOyB9XG4gIGlmIChvLm1pcnJvckNvbnRhaW5lciA9PT0gdm9pZCAwKSB7IG8ubWlycm9yQ29udGFpbmVyID0gZG9jLmJvZHk7IH1cblxuICB2YXIgZHJha2UgPSBlbWl0dGVyKHtcbiAgICBjb250YWluZXJzOiBvLmNvbnRhaW5lcnMsXG4gICAgc3RhcnQ6IG1hbnVhbFN0YXJ0LFxuICAgIGVuZDogZW5kLFxuICAgIGNhbmNlbDogY2FuY2VsLFxuICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgY2FuTW92ZTogY2FuTW92ZSxcbiAgICBkcmFnZ2luZzogZmFsc2VcbiAgfSk7XG5cbiAgaWYgKG8ucmVtb3ZlT25TcGlsbCA9PT0gdHJ1ZSkge1xuICAgIGRyYWtlLm9uKCdvdmVyJywgc3BpbGxPdmVyKS5vbignb3V0Jywgc3BpbGxPdXQpO1xuICB9XG5cbiAgZXZlbnRzKCk7XG5cbiAgcmV0dXJuIGRyYWtlO1xuXG4gIGZ1bmN0aW9uIGlzQ29udGFpbmVyIChlbCkge1xuICAgIHJldHVybiBkcmFrZS5jb250YWluZXJzLmluZGV4T2YoZWwpICE9PSAtMSB8fCBvLmlzQ29udGFpbmVyKGVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50cyAocmVtb3ZlKSB7XG4gICAgdmFyIG9wID0gcmVtb3ZlID8gJ3JlbW92ZScgOiAnYWRkJztcbiAgICB0b3VjaHkoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNlZG93bicsIGdyYWIpO1xuICAgIHRvdWNoeShkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2V1cCcsIHJlbGVhc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnR1YWxNb3ZlbWVudHMgKHJlbW92ZSkge1xuICAgIHZhciBvcCA9IHJlbW92ZSA/ICdyZW1vdmUnIDogJ2FkZCc7XG4gICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZW1vdmUnLCBzdGFydEJlY2F1c2VNb3VzZU1vdmVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVtZW50cyAocmVtb3ZlKSB7XG4gICAgdmFyIG9wID0gcmVtb3ZlID8gJ3JlbW92ZScgOiAnYWRkJztcbiAgICBjcm9zc3ZlbnRbb3BdKGRvY3VtZW50RWxlbWVudCwgJ3NlbGVjdHN0YXJ0JywgcHJldmVudEdyYWJiZWQpOyAvLyBJRThcbiAgICBjcm9zc3ZlbnRbb3BdKGRvY3VtZW50RWxlbWVudCwgJ2NsaWNrJywgcHJldmVudEdyYWJiZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgZXZlbnRzKHRydWUpO1xuICAgIHJlbGVhc2Uoe30pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmVudEdyYWJiZWQgKGUpIHtcbiAgICBpZiAoX2dyYWJiZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBncmFiIChlKSB7XG4gICAgX21vdmVYID0gZS5jbGllbnRYO1xuICAgIF9tb3ZlWSA9IGUuY2xpZW50WTtcblxuICAgIHZhciBpZ25vcmUgPSB3aGljaE1vdXNlQnV0dG9uKGUpICE9PSAxIHx8IGUubWV0YUtleSB8fCBlLmN0cmxLZXk7XG4gICAgaWYgKGlnbm9yZSkge1xuICAgICAgcmV0dXJuOyAvLyB3ZSBvbmx5IGNhcmUgYWJvdXQgaG9uZXN0LXRvLWdvZCBsZWZ0IGNsaWNrcyBhbmQgdG91Y2ggZXZlbnRzXG4gICAgfVxuICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG4gICAgdmFyIGNvbnRleHQgPSBjYW5TdGFydChpdGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX2dyYWJiZWQgPSBjb250ZXh0O1xuICAgIGV2ZW50dWFsTW92ZW1lbnRzKCk7XG4gICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgIGlmIChpc0lucHV0KGl0ZW0pKSB7IC8vIHNlZSBhbHNvOiBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMjA4XG4gICAgICAgIGl0ZW0uZm9jdXMoKTsgLy8gZml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzE3NlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBmaXhlcyBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMTU1XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCZWNhdXNlTW91c2VNb3ZlZCAoZSkge1xuICAgIGlmICghX2dyYWJiZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdoaWNoTW91c2VCdXR0b24oZSkgPT09IDApIHtcbiAgICAgIHJlbGVhc2Uoe30pO1xuICAgICAgcmV0dXJuOyAvLyB3aGVuIHRleHQgaXMgc2VsZWN0ZWQgb24gYW4gaW5wdXQgYW5kIHRoZW4gZHJhZ2dlZCwgbW91c2V1cCBkb2Vzbid0IGZpcmUuIHRoaXMgaXMgb3VyIG9ubHkgaG9wZVxuICAgIH1cbiAgICAvLyB0cnV0aHkgY2hlY2sgZml4ZXMgIzIzOSwgZXF1YWxpdHkgZml4ZXMgIzIwN1xuICAgIGlmIChlLmNsaWVudFggIT09IHZvaWQgMCAmJiBlLmNsaWVudFggPT09IF9tb3ZlWCAmJiBlLmNsaWVudFkgIT09IHZvaWQgMCAmJiBlLmNsaWVudFkgPT09IF9tb3ZlWSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoby5pZ25vcmVJbnB1dFRleHRTZWxlY3Rpb24pIHtcbiAgICAgIHZhciBjbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIHZhciBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcbiAgICAgIHZhciBlbGVtZW50QmVoaW5kQ3Vyc29yID0gZG9jLmVsZW1lbnRGcm9tUG9pbnQoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICBpZiAoaXNJbnB1dChlbGVtZW50QmVoaW5kQ3Vyc29yKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdyYWJiZWQgPSBfZ3JhYmJlZDsgLy8gY2FsbCB0byBlbmQoKSB1bnNldHMgX2dyYWJiZWRcbiAgICBldmVudHVhbE1vdmVtZW50cyh0cnVlKTtcbiAgICBtb3ZlbWVudHMoKTtcbiAgICBlbmQoKTtcbiAgICBzdGFydChncmFiYmVkKTtcblxuICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoX2l0ZW0pO1xuICAgIF9vZmZzZXRYID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQubGVmdDtcbiAgICBfb2Zmc2V0WSA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LnRvcDtcblxuICAgIGNsYXNzZXMuYWRkKF9jb3B5IHx8IF9pdGVtLCAnZ3UtdHJhbnNpdCcpO1xuICAgIHJlbmRlck1pcnJvckltYWdlKCk7XG4gICAgZHJhZyhlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblN0YXJ0IChpdGVtKSB7XG4gICAgaWYgKGRyYWtlLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzQ29udGFpbmVyKGl0ZW0pKSB7XG4gICAgICByZXR1cm47IC8vIGRvbid0IGRyYWcgY29udGFpbmVyIGl0c2VsZlxuICAgIH1cbiAgICB2YXIgaGFuZGxlID0gaXRlbTtcbiAgICB3aGlsZSAoZ2V0UGFyZW50KGl0ZW0pICYmIGlzQ29udGFpbmVyKGdldFBhcmVudChpdGVtKSkgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXRlbSA9IGdldFBhcmVudChpdGVtKTsgLy8gZHJhZyB0YXJnZXQgc2hvdWxkIGJlIGEgdG9wIGVsZW1lbnRcbiAgICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzb3VyY2UgPSBnZXRQYXJlbnQoaXRlbSk7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG8uaW52YWxpZChpdGVtLCBoYW5kbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1vdmFibGUgPSBvLm1vdmVzKGl0ZW0sIHNvdXJjZSwgaGFuZGxlLCBuZXh0RWwoaXRlbSkpO1xuICAgIGlmICghbW92YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiBpdGVtLFxuICAgICAgc291cmNlOiBzb3VyY2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuTW92ZSAoaXRlbSkge1xuICAgIHJldHVybiAhIWNhblN0YXJ0KGl0ZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFudWFsU3RhcnQgKGl0ZW0pIHtcbiAgICB2YXIgY29udGV4dCA9IGNhblN0YXJ0KGl0ZW0pO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBzdGFydChjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydCAoY29udGV4dCkge1xuICAgIGlmIChpc0NvcHkoY29udGV4dC5pdGVtLCBjb250ZXh0LnNvdXJjZSkpIHtcbiAgICAgIF9jb3B5ID0gY29udGV4dC5pdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIGRyYWtlLmVtaXQoJ2Nsb25lZCcsIF9jb3B5LCBjb250ZXh0Lml0ZW0sICdjb3B5Jyk7XG4gICAgfVxuXG4gICAgX3NvdXJjZSA9IGNvbnRleHQuc291cmNlO1xuICAgIF9pdGVtID0gY29udGV4dC5pdGVtO1xuICAgIF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IG5leHRFbChjb250ZXh0Lml0ZW0pO1xuXG4gICAgZHJha2UuZHJhZ2dpbmcgPSB0cnVlO1xuICAgIGRyYWtlLmVtaXQoJ2RyYWcnLCBfaXRlbSwgX3NvdXJjZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZhbGlkVGFyZ2V0ICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBlbmQgKCkge1xuICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICBkcm9wKGl0ZW0sIGdldFBhcmVudChpdGVtKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmdyYWIgKCkge1xuICAgIF9ncmFiYmVkID0gZmFsc2U7XG4gICAgZXZlbnR1YWxNb3ZlbWVudHModHJ1ZSk7XG4gICAgbW92ZW1lbnRzKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVsZWFzZSAoZSkge1xuICAgIHVuZ3JhYigpO1xuXG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIHZhciBjbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICB2YXIgY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG4gICAgdmFyIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgdmFyIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICBpZiAoZHJvcFRhcmdldCAmJiAoKF9jb3B5ICYmIG8uY29weVNvcnRTb3VyY2UpIHx8ICghX2NvcHkgfHwgZHJvcFRhcmdldCAhPT0gX3NvdXJjZSkpKSB7XG4gICAgICBkcm9wKGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcCAoaXRlbSwgdGFyZ2V0KSB7XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAoX2NvcHkgJiYgby5jb3B5U29ydFNvdXJjZSAmJiB0YXJnZXQgPT09IF9zb3VyY2UpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfaXRlbSk7XG4gICAgfVxuICAgIGlmIChpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0KSkge1xuICAgICAgZHJha2UuZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSwgX3NvdXJjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWtlLmVtaXQoJ2Ryb3AnLCBpdGVtLCB0YXJnZXQsIF9zb3VyY2UsIF9jdXJyZW50U2libGluZyk7XG4gICAgfVxuICAgIGNsZWFudXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZSAoKSB7XG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnQoaXRlbSk7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cbiAgICBkcmFrZS5lbWl0KF9jb3B5ID8gJ2NhbmNlbCcgOiAncmVtb3ZlJywgaXRlbSwgcGFyZW50LCBfc291cmNlKTtcbiAgICBjbGVhbnVwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwgKHJldmVydCkge1xuICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbDtcbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnQoaXRlbSk7XG4gICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICBpZiAoaW5pdGlhbCA9PT0gZmFsc2UgJiYgcmV2ZXJ0cykge1xuICAgICAgaWYgKF9jb3B5KSB7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX2NvcHkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc291cmNlLmluc2VydEJlZm9yZShpdGVtLCBfaW5pdGlhbFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5pdGlhbCB8fCByZXZlcnRzKSB7XG4gICAgICBkcmFrZS5lbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlLCBfc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJha2UuZW1pdCgnZHJvcCcsIGl0ZW0sIHBhcmVudCwgX3NvdXJjZSwgX2N1cnJlbnRTaWJsaW5nKTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICB1bmdyYWIoKTtcbiAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjbGFzc2VzLnJtKGl0ZW0sICdndS10cmFuc2l0Jyk7XG4gICAgfVxuICAgIGlmIChfcmVuZGVyVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChfcmVuZGVyVGltZXIpO1xuICAgIH1cbiAgICBkcmFrZS5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIGlmIChfbGFzdERyb3BUYXJnZXQpIHtcbiAgICAgIGRyYWtlLmVtaXQoJ291dCcsIGl0ZW0sIF9sYXN0RHJvcFRhcmdldCwgX3NvdXJjZSk7XG4gICAgfVxuICAgIGRyYWtlLmVtaXQoJ2RyYWdlbmQnLCBpdGVtKTtcbiAgICBfc291cmNlID0gX2l0ZW0gPSBfY29weSA9IF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IF9yZW5kZXJUaW1lciA9IF9sYXN0RHJvcFRhcmdldCA9IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBpc0luaXRpYWxQbGFjZW1lbnQgKHRhcmdldCwgcykge1xuICAgIHZhciBzaWJsaW5nO1xuICAgIGlmIChzICE9PSB2b2lkIDApIHtcbiAgICAgIHNpYmxpbmcgPSBzO1xuICAgIH0gZWxzZSBpZiAoX21pcnJvcikge1xuICAgICAgc2libGluZyA9IF9jdXJyZW50U2libGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgc2libGluZyA9IG5leHRFbChfY29weSB8fCBfaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQgPT09IF9zb3VyY2UgJiYgc2libGluZyA9PT0gX2luaXRpYWxTaWJsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQgKGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZWxlbWVudEJlaGluZEN1cnNvcjtcbiAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICB0YXJnZXQgPSBnZXRQYXJlbnQodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcblxuICAgIGZ1bmN0aW9uIGFjY2VwdGVkICgpIHtcbiAgICAgIHZhciBkcm9wcGFibGUgPSBpc0NvbnRhaW5lcih0YXJnZXQpO1xuICAgICAgaWYgKGRyb3BwYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQodGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKTtcbiAgICAgIHZhciByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UodGFyZ2V0LCBpbW1lZGlhdGUsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCByZWZlcmVuY2UpO1xuICAgICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIHNob3VsZCBhbHdheXMgYmUgYWJsZSB0byBkcm9wIGl0IHJpZ2h0IGJhY2sgd2hlcmUgaXQgd2FzXG4gICAgICB9XG4gICAgICByZXR1cm4gby5hY2NlcHRzKF9pdGVtLCB0YXJnZXQsIF9zb3VyY2UsIHJlZmVyZW5jZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhZyAoZSkge1xuICAgIGlmICghX21pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgdmFyIGNsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuICAgIHZhciB4ID0gY2xpZW50WCAtIF9vZmZzZXRYO1xuICAgIHZhciB5ID0gY2xpZW50WSAtIF9vZmZzZXRZO1xuXG4gICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcblxuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgdmFyIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICB2YXIgY2hhbmdlZCA9IGRyb3BUYXJnZXQgIT09IG51bGwgJiYgZHJvcFRhcmdldCAhPT0gX2xhc3REcm9wVGFyZ2V0O1xuICAgIGlmIChjaGFuZ2VkIHx8IGRyb3BUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgIG91dCgpO1xuICAgICAgX2xhc3REcm9wVGFyZ2V0ID0gZHJvcFRhcmdldDtcbiAgICAgIG92ZXIoKTtcbiAgICB9XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBfY29weSAmJiAhby5jb3B5U29ydFNvdXJjZSkge1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZWZlcmVuY2U7XG4gICAgdmFyIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpO1xuICAgIGlmIChpbW1lZGlhdGUgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCBpbW1lZGlhdGUsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIH0gZWxzZSBpZiAoby5yZXZlcnRPblNwaWxsID09PSB0cnVlICYmICFfY29weSkge1xuICAgICAgcmVmZXJlbmNlID0gX2luaXRpYWxTaWJsaW5nO1xuICAgICAgZHJvcFRhcmdldCA9IF9zb3VyY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChfY29weSAmJiBwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAocmVmZXJlbmNlID09PSBudWxsICYmIGNoYW5nZWQpIHx8XG4gICAgICByZWZlcmVuY2UgIT09IGl0ZW0gJiZcbiAgICAgIHJlZmVyZW5jZSAhPT0gbmV4dEVsKGl0ZW0pXG4gICAgKSB7XG4gICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG4gICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpO1xuICAgICAgZHJha2UuZW1pdCgnc2hhZG93JywgaXRlbSwgZHJvcFRhcmdldCwgX3NvdXJjZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdmVkICh0eXBlKSB7IGRyYWtlLmVtaXQodHlwZSwgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTsgfVxuICAgIGZ1bmN0aW9uIG92ZXIgKCkgeyBpZiAoY2hhbmdlZCkgeyBtb3ZlZCgnb3ZlcicpOyB9IH1cbiAgICBmdW5jdGlvbiBvdXQgKCkgeyBpZiAoX2xhc3REcm9wVGFyZ2V0KSB7IG1vdmVkKCdvdXQnKTsgfSB9XG4gIH1cblxuICBmdW5jdGlvbiBzcGlsbE92ZXIgKGVsKSB7XG4gICAgY2xhc3Nlcy5ybShlbCwgJ2d1LWhpZGUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaWxsT3V0IChlbCkge1xuICAgIGlmIChkcmFrZS5kcmFnZ2luZykgeyBjbGFzc2VzLmFkZChlbCwgJ2d1LWhpZGUnKTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWlycm9ySW1hZ2UgKCkge1xuICAgIGlmIChfbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZWN0ID0gX2l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgX21pcnJvciA9IF9pdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBfbWlycm9yLnN0eWxlLndpZHRoID0gZ2V0UmVjdFdpZHRoKHJlY3QpICsgJ3B4JztcbiAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgIGNsYXNzZXMucm0oX21pcnJvciwgJ2d1LXRyYW5zaXQnKTtcbiAgICBjbGFzc2VzLmFkZChfbWlycm9yLCAnZ3UtbWlycm9yJyk7XG4gICAgby5taXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoX21pcnJvcik7XG4gICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgJ2FkZCcsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICBjbGFzc2VzLmFkZChvLm1pcnJvckNvbnRhaW5lciwgJ2d1LXVuc2VsZWN0YWJsZScpO1xuICAgIGRyYWtlLmVtaXQoJ2Nsb25lZCcsIF9taXJyb3IsIF9pdGVtLCAnbWlycm9yJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVNaXJyb3JJbWFnZSAoKSB7XG4gICAgaWYgKF9taXJyb3IpIHtcbiAgICAgIGNsYXNzZXMucm0oby5taXJyb3JDb250YWluZXIsICdndS11bnNlbGVjdGFibGUnKTtcbiAgICAgIHRvdWNoeShkb2N1bWVudEVsZW1lbnQsICdyZW1vdmUnLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICBnZXRQYXJlbnQoX21pcnJvcikucmVtb3ZlQ2hpbGQoX21pcnJvcik7XG4gICAgICBfbWlycm9yID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbW1lZGlhdGVDaGlsZCAoZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgdmFyIGltbWVkaWF0ZSA9IHRhcmdldDtcbiAgICB3aGlsZSAoaW1tZWRpYXRlICE9PSBkcm9wVGFyZ2V0ICYmIGdldFBhcmVudChpbW1lZGlhdGUpICE9PSBkcm9wVGFyZ2V0KSB7XG4gICAgICBpbW1lZGlhdGUgPSBnZXRQYXJlbnQoaW1tZWRpYXRlKTtcbiAgICB9XG4gICAgaWYgKGltbWVkaWF0ZSA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGltbWVkaWF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJlZmVyZW5jZSAoZHJvcFRhcmdldCwgdGFyZ2V0LCB4LCB5KSB7XG4gICAgdmFyIGhvcml6b250YWwgPSBvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciByZWZlcmVuY2UgPSB0YXJnZXQgIT09IGRyb3BUYXJnZXQgPyBpbnNpZGUoKSA6IG91dHNpZGUoKTtcbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuXG4gICAgZnVuY3Rpb24gb3V0c2lkZSAoKSB7IC8vIHNsb3dlciwgYnV0IGFibGUgdG8gZmlndXJlIG91dCBhbnkgcG9zaXRpb25cbiAgICAgIHZhciBsZW4gPSBkcm9wVGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGVsO1xuICAgICAgdmFyIHJlY3Q7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWwgPSBkcm9wVGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChob3Jpem9udGFsICYmIChyZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMikgPiB4KSB7IHJldHVybiBlbDsgfVxuICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgKHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyKSA+IHkpIHsgcmV0dXJuIGVsOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNpZGUgKCkgeyAvLyBmYXN0ZXIsIGJ1dCBvbmx5IGF2YWlsYWJsZSBpZiBkcm9wcGVkIGluc2lkZSBhIGNoaWxkIGVsZW1lbnRcbiAgICAgIHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeCA+IHJlY3QubGVmdCArIGdldFJlY3RXaWR0aChyZWN0KSAvIDIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUoeSA+IHJlY3QudG9wICsgZ2V0UmVjdEhlaWdodChyZWN0KSAvIDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmUgKGFmdGVyKSB7XG4gICAgICByZXR1cm4gYWZ0ZXIgPyBuZXh0RWwodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvcHkgKGl0ZW0sIGNvbnRhaW5lcikge1xuICAgIHJldHVybiB0eXBlb2Ygby5jb3B5ID09PSAnYm9vbGVhbicgPyBvLmNvcHkgOiBvLmNvcHkoaXRlbSwgY29udGFpbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b3VjaHkgKGVsLCBvcCwgdHlwZSwgZm4pIHtcbiAgdmFyIHRvdWNoID0ge1xuICAgIG1vdXNldXA6ICd0b3VjaGVuZCcsXG4gICAgbW91c2Vkb3duOiAndG91Y2hzdGFydCcsXG4gICAgbW91c2Vtb3ZlOiAndG91Y2htb3ZlJ1xuICB9O1xuICB2YXIgcG9pbnRlcnMgPSB7XG4gICAgbW91c2V1cDogJ3BvaW50ZXJ1cCcsXG4gICAgbW91c2Vkb3duOiAncG9pbnRlcmRvd24nLFxuICAgIG1vdXNlbW92ZTogJ3BvaW50ZXJtb3ZlJ1xuICB9O1xuICB2YXIgbWljcm9zb2Z0ID0ge1xuICAgIG1vdXNldXA6ICdNU1BvaW50ZXJVcCcsXG4gICAgbW91c2Vkb3duOiAnTVNQb2ludGVyRG93bicsXG4gICAgbW91c2Vtb3ZlOiAnTVNQb2ludGVyTW92ZSdcbiAgfTtcbiAgaWYgKGdsb2JhbC5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpIHtcbiAgICBjcm9zc3ZlbnRbb3BdKGVsLCBwb2ludGVyc1t0eXBlXSwgZm4pO1xuICB9IGVsc2UgaWYgKGdsb2JhbC5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkge1xuICAgIGNyb3NzdmVudFtvcF0oZWwsIG1pY3Jvc29mdFt0eXBlXSwgZm4pO1xuICB9IGVsc2Uge1xuICAgIGNyb3NzdmVudFtvcF0oZWwsIHRvdWNoW3R5cGVdLCBmbik7XG4gICAgY3Jvc3N2ZW50W29wXShlbCwgdHlwZSwgZm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdoaWNoTW91c2VCdXR0b24gKGUpIHtcbiAgaWYgKGUudG91Y2hlcyAhPT0gdm9pZCAwKSB7IHJldHVybiBlLnRvdWNoZXMubGVuZ3RoOyB9XG4gIGlmIChlLndoaWNoICE9PSB2b2lkIDAgJiYgZS53aGljaCAhPT0gMCkgeyByZXR1cm4gZS53aGljaDsgfSAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzI2MVxuICBpZiAoZS5idXR0b25zICE9PSB2b2lkIDApIHsgcmV0dXJuIGUuYnV0dG9uczsgfVxuICB2YXIgYnV0dG9uID0gZS5idXR0b247XG4gIGlmIChidXR0b24gIT09IHZvaWQgMCkgeyAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi85OWU4ZmYxYmFhN2FlMzQxZTk0YmI4OWMzZTg0NTcwYzdjM2FkOWVhL3NyYy9ldmVudC5qcyNMNTczLUw1NzVcbiAgICByZXR1cm4gYnV0dG9uICYgMSA/IDEgOiBidXR0b24gJiAyID8gMyA6IChidXR0b24gJiA0ID8gMiA6IDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldCAoZWwpIHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyBnZXRTY3JvbGwoJ3Njcm9sbExlZnQnLCAncGFnZVhPZmZzZXQnKSxcbiAgICB0b3A6IHJlY3QudG9wICsgZ2V0U2Nyb2xsKCdzY3JvbGxUb3AnLCAncGFnZVlPZmZzZXQnKVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwgKHNjcm9sbFByb3AsIG9mZnNldFByb3ApIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxbb2Zmc2V0UHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbFtvZmZzZXRQcm9wXTtcbiAgfVxuICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgIHJldHVybiBkb2N1bWVudEVsZW1lbnRbc2Nyb2xsUHJvcF07XG4gIH1cbiAgcmV0dXJuIGRvYy5ib2R5W3Njcm9sbFByb3BdO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50QmVoaW5kUG9pbnQgKHBvaW50LCB4LCB5KSB7XG4gIHZhciBwID0gcG9pbnQgfHwge307XG4gIHZhciBzdGF0ZSA9IHAuY2xhc3NOYW1lO1xuICB2YXIgZWw7XG4gIHAuY2xhc3NOYW1lICs9ICcgZ3UtaGlkZSc7XG4gIGVsID0gZG9jLmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gIHAuY2xhc3NOYW1lID0gc3RhdGU7XG4gIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gbmV2ZXIgKCkgeyByZXR1cm4gZmFsc2U7IH1cbmZ1bmN0aW9uIGFsd2F5cyAoKSB7IHJldHVybiB0cnVlOyB9XG5mdW5jdGlvbiBnZXRSZWN0V2lkdGggKHJlY3QpIHsgcmV0dXJuIHJlY3Qud2lkdGggfHwgKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpOyB9XG5mdW5jdGlvbiBnZXRSZWN0SGVpZ2h0IChyZWN0KSB7IHJldHVybiByZWN0LmhlaWdodCB8fCAocmVjdC5ib3R0b20gLSByZWN0LnRvcCk7IH1cbmZ1bmN0aW9uIGdldFBhcmVudCAoZWwpIHsgcmV0dXJuIGVsLnBhcmVudE5vZGUgPT09IGRvYyA/IG51bGwgOiBlbC5wYXJlbnROb2RlOyB9XG5mdW5jdGlvbiBpc0lucHV0IChlbCkgeyByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IGlzRWRpdGFibGUoZWwpOyB9XG5mdW5jdGlvbiBpc0VkaXRhYmxlIChlbCkge1xuICBpZiAoIWVsKSB7IHJldHVybiBmYWxzZTsgfSAvLyBubyBwYXJlbnRzIHdlcmUgZWRpdGFibGVcbiAgaWYgKGVsLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ2ZhbHNlJykgeyByZXR1cm4gZmFsc2U7IH0gLy8gc3RvcCB0aGUgbG9va3VwXG4gIGlmIChlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJykgeyByZXR1cm4gdHJ1ZTsgfSAvLyBmb3VuZCBhIGNvbnRlbnRFZGl0YWJsZSBlbGVtZW50IGluIHRoZSBjaGFpblxuICByZXR1cm4gaXNFZGl0YWJsZShnZXRQYXJlbnQoZWwpKTsgLy8gY29udGVudEVkaXRhYmxlIGlzIHNldCB0byAnaW5oZXJpdCdcbn1cblxuZnVuY3Rpb24gbmV4dEVsIChlbCkge1xuICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG4gIGZ1bmN0aW9uIG1hbnVhbGx5ICgpIHtcbiAgICB2YXIgc2libGluZyA9IGVsO1xuICAgIGRvIHtcbiAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgIH0gd2hpbGUgKHNpYmxpbmcgJiYgc2libGluZy5ub2RlVHlwZSAhPT0gMSk7XG4gICAgcmV0dXJuIHNpYmxpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRIb3N0IChlKSB7XG4gIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgLy8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzE5MjU2My90b3VjaGVuZC1ldmVudC1wcm9wZXJ0aWVzXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMzRcbiAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXTtcbiAgfVxuICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgIHJldHVybiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICB9XG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBnZXRDb29yZCAoY29vcmQsIGUpIHtcbiAgdmFyIGhvc3QgPSBnZXRFdmVudEhvc3QoZSk7XG4gIHZhciBtaXNzTWFwID0ge1xuICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgIHBhZ2VZOiAnY2xpZW50WScgLy8gSUU4XG4gIH07XG4gIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgIGNvb3JkID0gbWlzc01hcFtjb29yZF07XG4gIH1cbiAgcmV0dXJuIGhvc3RbY29vcmRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyYWd1bGE7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxlKTplKHQucGVsbD17fSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYodFtyXT1uW3JdKX1yZXR1cm4gdH0sYz1cImRlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3JcIixsPVwiZm9ybWF0QmxvY2tcIixhPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKGUsbil9LHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5hcHBlbmRDaGlsZChlKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KX0sbj1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUodCl9LGY9ZnVuY3Rpb24odCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGw7cmV0dXJuIGRvY3VtZW50LmV4ZWNDb21tYW5kKHQsITEsZSl9LHA9e2JvbGQ6e2ljb246XCI8Yj5CPC9iPlwiLHRpdGxlOlwiQm9sZFwiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJib2xkXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImJvbGRcIil9fSxpdGFsaWM6e2ljb246XCI8aT5JPC9pPlwiLHRpdGxlOlwiSXRhbGljXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcIml0YWxpY1wiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpdGFsaWNcIil9fSx1bmRlcmxpbmU6e2ljb246XCI8dT5VPC91PlwiLHRpdGxlOlwiVW5kZXJsaW5lXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcInVuZGVybGluZVwiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJ1bmRlcmxpbmVcIil9fSxzdHJpa2V0aHJvdWdoOntpY29uOlwiPHN0cmlrZT5TPC9zdHJpa2U+XCIsdGl0bGU6XCJTdHJpa2UtdGhyb3VnaFwiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJzdHJpa2VUaHJvdWdoXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcInN0cmlrZVRocm91Z2hcIil9fSxoZWFkaW5nMTp7aWNvbjpcIjxiPkg8c3ViPjE8L3N1Yj48L2I+XCIsdGl0bGU6XCJIZWFkaW5nIDFcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPGgxPlwiKX19LGhlYWRpbmcyOntpY29uOlwiPGI+SDxzdWI+Mjwvc3ViPjwvYj5cIix0aXRsZTpcIkhlYWRpbmcgMlwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8aDI+XCIpfX0scGFyYWdyYXBoOntpY29uOlwiJiMxODI7XCIsdGl0bGU6XCJQYXJhZ3JhcGhcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPHA+XCIpfX0scXVvdGU6e2ljb246XCImIzgyMjA7ICYjODIyMTtcIix0aXRsZTpcIlF1b3RlXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxibG9ja3F1b3RlPlwiKX19LG9saXN0OntpY29uOlwiJiMzNTtcIix0aXRsZTpcIk9yZGVyZWQgTGlzdFwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwiaW5zZXJ0T3JkZXJlZExpc3RcIil9fSx1bGlzdDp7aWNvbjpcIiYjODIyNjtcIix0aXRsZTpcIlVub3JkZXJlZCBMaXN0XCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpbnNlcnRVbm9yZGVyZWRMaXN0XCIpfX0sY29kZTp7aWNvbjpcIiZsdDsvJmd0O1wiLHRpdGxlOlwiQ29kZVwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8cHJlPlwiKX19LGxpbmU6e2ljb246XCImIzgyMTM7XCIsdGl0bGU6XCJIb3Jpem9udGFsIExpbmVcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImluc2VydEhvcml6b250YWxSdWxlXCIpfX0sbGluazp7aWNvbjpcIiYjMTI4Mjc5O1wiLHRpdGxlOlwiTGlua1wiLHJlc3VsdDpmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgbGluayBVUkxcIik7dCYmZihcImNyZWF0ZUxpbmtcIix0KX19LGltYWdlOntpY29uOlwiJiMxMjgyNDc7XCIsdGl0bGU6XCJJbWFnZVwiLHJlc3VsdDpmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgaW1hZ2UgVVJMXCIpO3QmJmYoXCJpbnNlcnRJbWFnZVwiLHQpfX19LG09e2FjdGlvbmJhcjpcInBlbGwtYWN0aW9uYmFyXCIsYnV0dG9uOlwicGVsbC1idXR0b25cIixjb250ZW50OlwicGVsbC1jb250ZW50XCIsc2VsZWN0ZWQ6XCJwZWxsLWJ1dHRvbi1zZWxlY3RlZFwifSxyPWZ1bmN0aW9uKG4pe3ZhciB0PW4uYWN0aW9ucz9uLmFjdGlvbnMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3BbdF06cFt0Lm5hbWVdP2Uoe30scFt0Lm5hbWVdLHQpOnR9KTpPYmplY3Qua2V5cyhwKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHBbdF19KSxyPWUoe30sbSxuLmNsYXNzZXMpLGk9bltjXXx8XCJkaXZcIixvPWQoXCJkaXZcIik7by5jbGFzc05hbWU9ci5hY3Rpb25iYXIscyhuLmVsZW1lbnQsbyk7dmFyIHU9bi5lbGVtZW50LmNvbnRlbnQ9ZChcImRpdlwiKTtyZXR1cm4gdS5jb250ZW50RWRpdGFibGU9ITAsdS5jbGFzc05hbWU9ci5jb250ZW50LHUub25pbnB1dD1mdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldC5maXJzdENoaWxkO2UmJjM9PT1lLm5vZGVUeXBlP2YobCxcIjxcIitpK1wiPlwiKTpcIjxicj5cIj09PXUuaW5uZXJIVE1MJiYodS5pbm5lckhUTUw9XCJcIiksbi5vbkNoYW5nZSh1LmlubmVySFRNTCl9LHUub25rZXlkb3duPWZ1bmN0aW9uKHQpe3ZhciBlO1wiRW50ZXJcIj09PXQua2V5JiZcImJsb2NrcXVvdGVcIj09PShlPWwsZG9jdW1lbnQucXVlcnlDb21tYW5kVmFsdWUoZSkpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxcIitpK1wiPlwiKX0sMCl9LHMobi5lbGVtZW50LHUpLHQuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1kKFwiYnV0dG9uXCIpO2lmKGUuY2xhc3NOYW1lPXIuYnV0dG9uLGUuaW5uZXJIVE1MPXQuaWNvbixlLnRpdGxlPXQudGl0bGUsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksZS5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHQucmVzdWx0KCkmJnUuZm9jdXMoKX0sdC5zdGF0ZSl7dmFyIG49ZnVuY3Rpb24oKXtyZXR1cm4gZS5jbGFzc0xpc3RbdC5zdGF0ZSgpP1wiYWRkXCI6XCJyZW1vdmVcIl0oci5zZWxlY3RlZCl9O2EodSxcImtleXVwXCIsbiksYSh1LFwibW91c2V1cFwiLG4pLGEoZSxcImNsaWNrXCIsbil9cyhvLGUpfSksbi5zdHlsZVdpdGhDU1MmJmYoXCJzdHlsZVdpdGhDU1NcIiksZihjLGkpLG4uZWxlbWVudH0saT17ZXhlYzpmLGluaXQ6cn07dC5leGVjPWYsdC5pbml0PXIsdC5kZWZhdWx0PWksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2kgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLCB0aWNrO1xuaWYgKHNpKSB7XG4gIHRpY2sgPSBmdW5jdGlvbiAoZm4pIHsgc2V0SW1tZWRpYXRlKGZuKTsgfTtcbn0gZWxzZSB7XG4gIHRpY2sgPSBmdW5jdGlvbiAoZm4pIHsgc2V0VGltZW91dChmbiwgMCk7IH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGljazsiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsIiFmdW5jdGlvbih0LG8pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobyk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bygpOnQudGluZ2xlPW8oKX0odGhpcyxmdW5jdGlvbigpe3ZhciBvPSExO2Z1bmN0aW9uIHQodCl7dGhpcy5vcHRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylmb3IodmFyIG8gaW4gYXJndW1lbnRzW3RdKWFyZ3VtZW50c1t0XS5oYXNPd25Qcm9wZXJ0eShvKSYmKGFyZ3VtZW50c1swXVtvXT1hcmd1bWVudHNbdF1bb10pO3JldHVybiBhcmd1bWVudHNbMF19KHt9LHtvbkNsb3NlOm51bGwsb25PcGVuOm51bGwsYmVmb3JlT3BlbjpudWxsLGJlZm9yZUNsb3NlOm51bGwsc3RpY2t5Rm9vdGVyOiExLGZvb3RlcjohMSxjc3NDbGFzczpbXSxjbG9zZUxhYmVsOlwiQ2xvc2VcIixjbG9zZU1ldGhvZHM6W1wib3ZlcmxheVwiLFwiYnV0dG9uXCIsXCJlc2NhcGVcIl19LHQpLHRoaXMuaW5pdCgpfWZ1bmN0aW9uIGUoKXt0aGlzLm1vZGFsQm94Rm9vdGVyJiYodGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS53aWR0aD10aGlzLm1vZGFsQm94LmNsaWVudFdpZHRoK1wicHhcIix0aGlzLm1vZGFsQm94Rm9vdGVyLnN0eWxlLmxlZnQ9dGhpcy5tb2RhbEJveC5vZmZzZXRMZWZ0K1wicHhcIil9cmV0dXJuIHQucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXtpZighdGhpcy5tb2RhbClyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1vZGFsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsXCIpLDAhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmxlbmd0aCYmLTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJvdmVybGF5XCIpfHx0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLW5vT3ZlcmxheUNsb3NlXCIpO3RoaXMubW9kYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLm9wdHMuY3NzQ2xhc3MuZm9yRWFjaChmdW5jdGlvbih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHQpfSx0aGlzKSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmKHRoaXMubW9kYWxDbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLHRoaXMubW9kYWxDbG9zZUJ0bi50eXBlPVwiYnV0dG9uXCIsdGhpcy5tb2RhbENsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWxfX2Nsb3NlXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksdGhpcy5tb2RhbENsb3NlQnRuSWNvbi5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZUljb25cIiksdGhpcy5tb2RhbENsb3NlQnRuSWNvbi5pbm5lckhUTUw9Jzxzdmcgdmlld0JveD1cIjAgMCAxMCAxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTS4zIDkuN2MuMi4yLjQuMy43LjMuMyAwIC41LS4xLjctLjNMNSA2LjRsMy4zIDMuM2MuMi4yLjUuMy43LjMuMiAwIC41LS4xLjctLjMuNC0uNC40LTEgMC0xLjRMNi40IDVsMy4zLTMuM2MuNC0uNC40LTEgMC0xLjQtLjQtLjQtMS0uNC0xLjQgMEw1IDMuNiAxLjcuM0MxLjMtLjEuNy0uMS4zLjNjLS40LjQtLjQgMSAwIDEuNEwzLjYgNSAuMyA4LjNjLS40LjQtLjQgMSAwIDEuNHpcIiBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+Jyx0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSx0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZUxhYmVsXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsLmlubmVySFRNTD10aGlzLm9wdHMuY2xvc2VMYWJlbCx0aGlzLm1vZGFsQ2xvc2VCdG4uYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENsb3NlQnRuSWNvbiksdGhpcy5tb2RhbENsb3NlQnRuLmFwcGVuZENoaWxkKHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsKSk7dGhpcy5tb2RhbEJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubW9kYWxCb3guY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC1ib3hcIiksdGhpcy5tb2RhbEJveENvbnRlbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Q29udGVudC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsLWJveF9fY29udGVudFwiKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hDb250ZW50KSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ2xvc2VCdG4pO3RoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEJveCl9LmNhbGwodGhpcyksZnVuY3Rpb24oKXt0aGlzLl9ldmVudHM9e2NsaWNrQ2xvc2VCdG46dGhpcy5jbG9zZS5iaW5kKHRoaXMpLGNsaWNrT3ZlcmxheTpmdW5jdGlvbih0KXt2YXIgbz10aGlzLm1vZGFsLm9mZnNldFdpZHRoLXRoaXMubW9kYWwuY2xpZW50V2lkdGgsZT10LmNsaWVudFg+PXRoaXMubW9kYWwub2Zmc2V0V2lkdGgtMTUscz10aGlzLm1vZGFsLnNjcm9sbEhlaWdodCE9PXRoaXMubW9kYWwub2Zmc2V0SGVpZ2h0O2lmKFwiTWFjSW50ZWxcIj09PW5hdmlnYXRvci5wbGF0Zm9ybSYmMD09byYmZSYmcylyZXR1cm47LTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJvdmVybGF5XCIpJiYhZnVuY3Rpb24odCxvKXtmb3IoOyh0PXQucGFyZW50RWxlbWVudCkmJiF0LmNsYXNzTGlzdC5jb250YWlucyhvKTspO3JldHVybiB0fSh0LnRhcmdldCxcInRpbmdsZS1tb2RhbFwiKSYmdC5jbGllbnRYPHRoaXMubW9kYWwuY2xpZW50V2lkdGgmJnRoaXMuY2xvc2UoKX0uYmluZCh0aGlzKSxyZXNpemU6dGhpcy5jaGVja092ZXJmbG93LmJpbmQodGhpcyksa2V5Ym9hcmROYXY6ZnVuY3Rpb24odCl7LTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJlc2NhcGVcIikmJjI3PT09dC53aGljaCYmdGhpcy5pc09wZW4oKSYmdGhpcy5jbG9zZSgpfS5iaW5kKHRoaXMpfSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmdGhpcy5tb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX2V2ZW50cy5jbGlja0Nsb3NlQnRuKTt0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLl9ldmVudHMuY2xpY2tPdmVybGF5KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX2V2ZW50cy5yZXNpemUpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5fZXZlbnRzLmtleWJvYXJkTmF2KX0uY2FsbCh0aGlzKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubW9kYWwsZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSx0aGlzLm9wdHMuZm9vdGVyJiZ0aGlzLmFkZEZvb3RlcigpLHRoaXN9LHQucHJvdG90eXBlLl9idXN5PWZ1bmN0aW9uKHQpe289dH0sdC5wcm90b3R5cGUuX2lzQnVzeT1mdW5jdGlvbigpe3JldHVybiBvfSx0LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7bnVsbCE9PXRoaXMubW9kYWwmJih0aGlzLmlzT3BlbigpJiZ0aGlzLmNsb3NlKCEwKSxmdW5jdGlvbigpey0xIT09dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpJiZ0aGlzLm1vZGFsQ2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZlbnRzLmNsaWNrQ2xvc2VCdG4pO3RoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX2V2ZW50cy5jbGlja092ZXJsYXkpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fZXZlbnRzLnJlc2l6ZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9ldmVudHMua2V5Ym9hcmROYXYpfS5jYWxsKHRoaXMpLHRoaXMubW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsKSx0aGlzLm1vZGFsPW51bGwpfSx0LnByb3RvdHlwZS5pc09wZW49ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpfSx0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2lzQnVzeSgpKXt0aGlzLl9idXN5KCEwKTt2YXIgdD10aGlzO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQub3B0cy5iZWZvcmVPcGVuJiZ0Lm9wdHMuYmVmb3JlT3BlbigpLHRoaXMubW9kYWwuc3R5bGUucmVtb3ZlUHJvcGVydHk/dGhpcy5tb2RhbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik6dGhpcy5tb2RhbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNwbGF5XCIpLHRoaXMuX3Njcm9sbFBvc2l0aW9uPXdpbmRvdy5wYWdlWU9mZnNldCxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtZW5hYmxlZFwiKSxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD0tdGhpcy5fc2Nyb2xsUG9zaXRpb24rXCJweFwiLHRoaXMuc2V0U3RpY2t5Rm9vdGVyKHRoaXMub3B0cy5zdGlja3lGb290ZXIpLHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC0tdmlzaWJsZVwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9wdHMub25PcGVuJiZ0Lm9wdHMub25PcGVuLmNhbGwodCksdC5fYnVzeSghMSksdGhpcy5jaGVja092ZXJmbG93KCksdGhpc319LHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLl9pc0J1c3koKSl7aWYodGhpcy5fYnVzeSghMCksITEsXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRzLmJlZm9yZUNsb3NlKWlmKCF0aGlzLm9wdHMuYmVmb3JlQ2xvc2UuY2FsbCh0aGlzKSlyZXR1cm4gdm9pZCB0aGlzLl9idXN5KCExKTtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ0aW5nbGUtZW5hYmxlZFwiKSxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD1udWxsLHdpbmRvdy5zY3JvbGxUbyh7dG9wOnRoaXMuX3Njcm9sbFBvc2l0aW9uLGJlaGF2aW9yOlwiaW5zdGFudFwifSksdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpO3ZhciBvPXRoaXM7by5tb2RhbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLFwiZnVuY3Rpb25cIj09dHlwZW9mIG8ub3B0cy5vbkNsb3NlJiZvLm9wdHMub25DbG9zZS5jYWxsKHRoaXMpLG8uX2J1c3koITEpfX0sdC5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLm1vZGFsQm94Q29udGVudC5pbm5lckhUTUw9dDoodGhpcy5tb2RhbEJveENvbnRlbnQuaW5uZXJIVE1MPVwiXCIsdGhpcy5tb2RhbEJveENvbnRlbnQuYXBwZW5kQ2hpbGQodCkpLHRoaXMuaXNPcGVuKCkmJnRoaXMuY2hlY2tPdmVyZmxvdygpLHRoaXN9LHQucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RhbEJveENvbnRlbnR9LHQucHJvdG90eXBlLmFkZEZvb3Rlcj1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubW9kYWxCb3hGb290ZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXJcIiksdGhpcy5tb2RhbEJveC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKX0uY2FsbCh0aGlzKSx0aGlzfSx0LnByb3RvdHlwZS5zZXRGb290ZXJDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1vZGFsQm94Rm9vdGVyLmlubmVySFRNTD10LHRoaXN9LHQucHJvdG90eXBlLmdldEZvb3RlckNvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RhbEJveEZvb3Rlcn0sdC5wcm90b3R5cGUuc2V0U3RpY2t5Rm9vdGVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzT3ZlcmZsb3coKXx8KHQ9ITEpLHQ/dGhpcy5tb2RhbEJveC5jb250YWlucyh0aGlzLm1vZGFsQm94Rm9vdGVyKSYmKHRoaXMubW9kYWxCb3gucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEJveEZvb3RlciksdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXItLXN0aWNreVwiKSxlLmNhbGwodGhpcyksdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT10aGlzLm1vZGFsQm94Rm9vdGVyLmNsaWVudEhlaWdodCsyMCtcInB4XCIpOnRoaXMubW9kYWxCb3hGb290ZXImJih0aGlzLm1vZGFsQm94LmNvbnRhaW5zKHRoaXMubW9kYWxCb3hGb290ZXIpfHwodGhpcy5tb2RhbC5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hGb290ZXIpLHRoaXMubW9kYWxCb3hGb290ZXIuc3R5bGUud2lkdGg9XCJhdXRvXCIsdGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS5sZWZ0PVwiXCIsdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT1cIlwiLHRoaXMubW9kYWxCb3hGb290ZXIuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC1ib3hfX2Zvb3Rlci0tc3RpY2t5XCIpKSksdGhpc30sdC5wcm90b3R5cGUuYWRkRm9vdGVyQnRuPWZ1bmN0aW9uKHQsbyxlKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO3JldHVybiBzLmlubmVySFRNTD10LHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZSksXCJzdHJpbmdcIj09dHlwZW9mIG8mJm8ubGVuZ3RoJiZvLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3MuY2xhc3NMaXN0LmFkZCh0KX0pLHRoaXMubW9kYWxCb3hGb290ZXIuYXBwZW5kQ2hpbGQocyksc30sdC5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7Y29uc29sZS53YXJuKFwiUmVzaXplIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDEuMFwiKX0sdC5wcm90b3R5cGUuaXNPdmVyZmxvdz1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ8PXRoaXMubW9kYWxCb3guY2xpZW50SGVpZ2h0fSx0LnByb3RvdHlwZS5jaGVja092ZXJmbG93PWZ1bmN0aW9uKCl7dGhpcy5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aW5nbGUtbW9kYWwtLXZpc2libGVcIikmJih0aGlzLmlzT3ZlcmZsb3coKT90aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLW92ZXJmbG93XCIpOnRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC0tb3ZlcmZsb3dcIiksIXRoaXMuaXNPdmVyZmxvdygpJiZ0aGlzLm9wdHMuc3RpY2t5Rm9vdGVyP3RoaXMuc2V0U3RpY2t5Rm9vdGVyKCExKTp0aGlzLmlzT3ZlcmZsb3coKSYmdGhpcy5vcHRzLnN0aWNreUZvb3RlciYmKGUuY2FsbCh0aGlzKSx0aGlzLnNldFN0aWNreUZvb3RlcighMCkpKX0se21vZGFsOnR9fSk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==