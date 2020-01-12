import styles from '!!raw-loader!sass-loader!./theme-switcher.component.scss';
import { Component, ShadowDOMComponent } from '@core/shadow-dom';

@Component({
  selector: 'app-theme-switcher',
  styles
})
export class ThemeSwitcherComponent extends ShadowDOMComponent {
  private asList = false;

  onInit(): void {
    this.attachEventListeners();
  }

  onRender(): string {
    return `<input type='checkbox' checked=${this.asList} /> <span>${this.asList ? 'Show as an awesome grid' : 'Show as list'}</span>`;
  }

  private attachEventListeners(): void {
    this.shadowRoot!.querySelector('input')!.addEventListener('click', () => {
      this.asList = !this.asList;
      this.render();
      this.attachEventListeners();
    });
  }
}
