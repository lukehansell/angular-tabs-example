import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active)
    if (activeTabs.length === 0) this.selectTab(this.tabs.first)
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => {
      tab.active = false
    })
    tab.active = true;
  }

}
