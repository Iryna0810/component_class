import { Component } from "react";
import { Button } from "components/styled";

export default class Tabs extends Component {
    state = {
        activeTabIndex: 0
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.activeTabIndex !== this.state.activeTabIndex;
    }

    setActiveTabIndex = idx => {
        this.setState({ activeTabIndex: idx });
    };

    render() {
        console.log(`Re-render  £ ${Date.now()}`);

        const { activeTabIndex } = this.state;
        const { items } = this.props;
        const activeTab = items[activeTabIndex];

        return (
            <>
                <div>
                    {items.map((item, idx) => (
                    <Button
                        type='button'
                            key={item.label}
                            onClick={() => {
                                this.setActiveTabIndex(idx)
                            }}
                        >{item.label}
                    </Button>
                    )                
                    )}
                    <div>
                        <h3>{activeTab.label}</h3>
                        <p>{ activeTab.content}</p>
                    </div>
            </div>
            </>


        )
    }

}