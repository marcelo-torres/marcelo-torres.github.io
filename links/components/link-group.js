/**
 * Based on: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
 */

class LinkGroup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const groupData = JSON.parse(this.innerText);

    if(!groupData) return;

    console.log(groupData);

     var list = [];
     groupData.elements.forEach(element => {
      var listElement = `<div uk-grid>
      <div class="uk-width-auto">
          <a href="${element.link}">${element.name}</a>
      </div>
      <div class="uk-width-expand">
          <div class="uk-text-muted">${replaceStringNull(element.description)}</div>
      </div>
  </div>`;

       list.push(listElement);
     });

    this.innerHTML =
      `<div class="uk-card uk-card-default uk-width-1-1@m">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">${groupData.groupName}</h3>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <ul class="uk-list uk-list-divider">
            ${list.join("")}
        </ul>
    </div>
</div>
</div>
<br/>`

  }
}

function replaceStringNull(s) {
  if(!s) return '';
  return s;
}

customElements.define('link-group', LinkGroup);