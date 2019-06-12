export function selectTab(tabId){
    return (dispatch) => dispatch({
        type:'TAB_SELECTED',
        payload: tabId
    })
}

export function tabsToShow(...tabIds){
    const tableToShow = {}
    tabIds.forEach(e => tableToShow[e] = true)
    return{
        type: 'TAB_SHOWED',
        payload: tableToShow
    }
}