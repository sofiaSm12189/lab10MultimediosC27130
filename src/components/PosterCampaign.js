class PosterCampaign extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
    });

    this._titulo1 = "";
    this._titulo2 = "";
    this._frase = "";
    this._accion = "";
    this._imagen = "";
  }

  set titulo1(value) {
    this._titulo1 = value;
    this.render();
  }

  set titulo2(value) {
    this._titulo2 = value;
    this.render();
  }

  set frase(value) {
    this._frase = value;
    this.render();
  }

  set accion(value) {
    this._accion = value;
    this.render();
  }

  set imagen(value) {
    this._imagen = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        width: 650px;

        --poster-bg: #c89600;
        --poster-radius: 28px;
        --title-color: #fff;
        --message-bg: rgba(255,255,255,.12);
      }

      .poster {
        background: var(--poster-bg);
        border-radius: var(--poster-radius);
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0,0,0,.18);
      }

      .content {
        padding: 28px;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
      }

      .logo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: white;
        object-fit: contain;
        padding: 10px;
      }

      .line {
        flex: 1;
        height: 4px;
        background: rgba(255,255,255,.75);
      }

      .announcement {
        text-align: center;
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .title {
        text-align: center;
        color: var(--title-color);
        line-height: .95;
        margin-bottom: 30px;
      }

      .title h1 {
        font-size: 90px;
        font-weight: 900;
        text-transform: uppercase;
        text-shadow: 0 6px 0 rgba(0,0,0,.15);
      }

      .image-wrapper {
        height: 420px;
        display: flex;
        justify-content: center;
        align-items: end;
        overflow: hidden;
      }

      .image {
        max-height: 100%;
        object-fit: contain;
      }

      .message-box {
        margin: 20px 28px 30px;
        background: var(--message-bg);
        border: 2px solid rgba(255,255,255,.25);
        border-radius: 25px;
        text-align: center;
        padding: 30px;
        color: white;
      }

      .frase {
        font-size: 20px;
        font-style: italic;
        margin-bottom: 15px;
      }

      .accion {
        font-size: 52px;
        font-weight: 900;
        text-transform: uppercase;
      }
    </style>

    <div class="poster" part="poster">

      <div class="content">

        <div class="header">
          <img
            class="logo"
            src="./assets/images/logoucr.png"
          />

          <div class="line"></div>
        </div>

        <div class="announcement">
          <slot name="announcement"></slot>
        </div>

        <div class="title" part="title">
          <h1>${this._titulo1}</h1>
          <h1>${this._titulo2}</h1>
        </div>

        <div class="image-wrapper">
          <img
            class="image"
            src="${this._imagen}"
          />
        </div>

      </div>

      <div class="message-box" part="message">
        <div class="frase">
          ${this._frase}
        </div>

        <div class="accion">
          ${this._accion}
        </div>
      </div>

    </div>
  `;
  }
}

customElements.define("poster-campaign", PosterCampaign);
