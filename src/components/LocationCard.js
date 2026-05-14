class LocationCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
    });

    this._texto = "";
    this._destacado = false;
  }

  set texto(value) {
    this._texto = value;
    this.render();
  }

  set destacado(value) {
    this._destacado = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        
        <style>

            :host {

                --card-background:
                    #1d4d89;

                --card-background-featured:
                    #153a6a;

                --card-hover-background:
                    #2b63aa;

                --card-text-color:
                    white;

                --card-arrow-color:
                    white;

                --card-divider:
                    rgba(255,255,255,.12);

                --card-padding:
                    24px;

                display: block;
            }

            .card {

                background:
                    ${
                      this._destacado
                        ? "var(--card-background-featured)"
                        : "var(--card-background)"
                    };

                padding:
                    var(
                        --card-padding
                    );

                display: flex;

                align-items: center;

                justify-content:
                    space-between;

                border-bottom:
                    1px solid
                    var(
                        --card-divider
                    );

                transition:
                    .25s ease;

                cursor:
                    pointer;
            }

            .card:hover {

                background:
                    var(
                        --card-hover-background
                    );
            }

            .title {

                margin: 0;

                color:
                    var(
                        --card-text-color
                    );

                font-size:
                    1.35rem;

                font-weight:
                    500;

                letter-spacing:
                    .5px;

                flex: 1;
            }

            .arrow {

                color:
                    var(
                        --card-arrow-color
                    );

                font-size:
                    1.7rem;

                font-weight:
                    bold;

                transition:
                    transform .2s ease;
            }

            .card:hover .arrow {

                transform:
                    translateX(5px);
            }

        </style>

        <div
            class="card"
            part="card"
        >

            <h3
                class="title"
                part="title"
            >

                ${this._texto}

            </h3>

            <slot name="icon">

                <span
                    class="arrow"
                    part="arrow"
                >
                    →
                </span>

            </slot>

        </div>
        `;
  }
}

customElements.define("location-card", LocationCard);

export default LocationCard;
