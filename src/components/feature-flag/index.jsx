import { useContext } from 'react';
import Accordion from '../accordion';
import LightDarkMode from '../light-dark-mode';
import RandomColor from '../random-color';
import TicTacToe from '../tic-tac-toe';
import TreeView from '../tree-view';
import { FeatureFlagsContext } from './context';
import menus from '../tree-view/data';
import TabTest from '../custom-tabs/tab-test';
// import ScrollIndicator from '../scroll-indicator';
export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    // {
    //   key: 'showScroll',
    //   component: <ScrollIndicator />,
    // },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe />,
    },
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor />,
    },
    {
      key: 'showAccordian',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={menus} />,
    },
    {
      key: 'showTabs',
      component: <TabTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
