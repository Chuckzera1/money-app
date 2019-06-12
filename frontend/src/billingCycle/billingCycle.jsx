import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { create, update, remove } from './billingCycleAction'

import List from "./billingCycleList";
import Form from './billingCycleForm'

import { selectTab, tabsToShow } from '../common/tab/tabActions'

class BillinCycle extends Component {


    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.tabsToShow('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamentos' small='Versão 1.0' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target='tabList' icon='bars' label='Listar'></TabHeader>
                            <TabHeader target='tabCreate' icon='plus' label='Incluir'></TabHeader>
                            <TabHeader target='tabUpdate' icon='pencil' label='Alterar'></TabHeader>
                            <TabHeader target='tabDelete' icon='trash-o' label='Excluir'></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} submitClass='primary' submitLabel='Incluir' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitClass='info' submitLabel='Alterar' />
                            </TabContent>
                            <TabContent id='tabDelete'> 
                                <Form onSubmit={this.props.remove} readOnly='true' submitClass='danger' submitLabel='Excluir' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }

}

const mapsDispatchToProps = dispatch => bindActionCreators({
    selectTab, tabsToShow, create, update, remove
}, dispatch)
export default connect(null, mapsDispatchToProps)(BillinCycle)