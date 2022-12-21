import { Component, h, Prop } from '@stencil/core';

const TYPE_INFO = 'information';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'warning';
const TYPE_COMMUNICATION = 'communication';
const TYPE_COMMUNICATION_ORGA = 'communication-orga';
const TYPE_COMMUNICATION_CERTIF = 'communication-certif';

const types = [
  TYPE_INFO,
  TYPE_ERROR,
  TYPE_WARNING,
  TYPE_COMMUNICATION,
  TYPE_COMMUNICATION_ORGA,
  TYPE_COMMUNICATION_CERTIF,
];

const icons = {
  [TYPE_INFO]: 'circle-info',
  [TYPE_ERROR]: 'triangle-exclamation',
  [TYPE_WARNING]: 'circle-exclamation',
  [TYPE_COMMUNICATION]: 'bullhorn',
  [TYPE_COMMUNICATION_ORGA]: 'bullhorn',
  [TYPE_COMMUNICATION_CERTIF]: 'bullhorn',
};

@Component({
  tag: 'pix-banner',
  styleUrl: 'pix-banner.scss',
  shadow: false,
  assetsDirs: ['../assets'],
})
export class PixBanner {

  /**
   * Définit le type de bannière
   */
  @Prop() type: string = 'information';

  @Prop() canCloseBanner: boolean = false;

  @Prop() actionUrl: string;

  @Prop() actionLabel: string;

  isBannerVisible: boolean = true;

  // FIXME ...attributes

  get displayAction() {
    return this.actionLabel && this.actionUrl;
  }

  get icon() {
    return icons[this.type];
  }

  render() {
    return (
      this.isBannerVisible && (
        <div class={`pix-banner pix-banner--${this.type}`} role="alert">
          <i class={`fas fa-${this.icon} pix-banner__icon`}></i>
          <div>
            <slot />
            {this.displayAction && (
              <a
                class="pix-banner__action"
                href={this.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.actionLabel}
                <i class={`fas fa-up-right-from-square external-link`}></i>
              </a>
            )}
          </div>
          {this.canCloseBanner && (
            <div class="pix-banner__close">
              <button>Fermer</button>
            </div>
          )}
        </div>
      )
    );
  }
}
