import { combineReducers } from 'redux'

import DashboarReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillinCycleReducer from '../billingCycle/billingCycleReducer'
import {reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
    dashboard: DashboarReducer,
    tab: TabReducer,
    billingCycle: BillinCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer