import "./LocationCard.js";

class DirectionPoster extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
    });

    this._ubicaciones = [];
  }

  set ubicaciones(value) {
    this._ubicaciones = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        
        <style>

            :host {

                --directory-background:
                    #0f3970;

                --directory-item-color:
                    white;

                --directory-divider-color:
                    rgba(255,255,255,.15);

                --directory-footer-background:
                    #c8c8c8;

                --directory-footer-color:
                    #0f3970;

                --directory-radius:
                    22px;

                --directory-shadow:
                    0 12px 30px rgba(0,0,0,.25);

                display: block;
            }

            .poster {

                background:
                    var(
                        --directory-background
                    );

                border-radius:
                    var(
                        --directory-radius
                    );

                overflow: hidden;

                box-shadow:
                    var(
                        --directory-shadow
                    );

                min-height: 820px;

                display: flex;

                flex-direction:
                    column;
            }

            .top-label {

                padding:
                    24px 24px 12px;

                text-align:
                    center;

                color:
                    white;

                font-size:
                    1rem;

                font-weight:
                    700;

                letter-spacing:
                    1px;
            }

            .top-label::slotted(*) {
                color: white;
            }

            .grid {

                display: flex;

                flex-direction:
                    column;

                flex: 1;
            }

            .footer {

                background:
                    var(
                        --directory-footer-background
                    );

                padding:
                    20px;

                text-align:
                    center;

                border-top:
                    3px solid
                    rgba(0,0,0,.15);
            }

            .footer span {

                color:
                    var(
                        --directory-footer-color
                    );

                font-size:
                    2rem;

                font-weight:
                    900;

                letter-spacing:
                    4px;
            }

        </style>

        <section
            class="poster"
            part="poster"
        >

            <div
                class="top-label"
                part="header"
            >

                <slot name="tipo">

                    📍 Señalización

                </slot>

            </div>

            <div
                class="grid"
                id="grid"
                part="grid"
            ></div>

            <footer
                class="footer"
                part="footer"
            >

                <span>
                    UCR
                </span>

            </footer>

        </section>
        `;

    const grid = this.shadowRoot.querySelector("#grid");

    if (!grid) return;

    grid.innerHTML = "";

    this._ubicaciones.forEach((ubicacion, index) => {
      const card = document.createElement("location-card");

      card.texto = ubicacion;

      if (index === this._ubicaciones.length - 1) {
        card.destacado = true;
      }

      grid.appendChild(card);
    });
  }
}

customElements.define("direction-poster", DirectionPoster);

export default DirectionPoster;
