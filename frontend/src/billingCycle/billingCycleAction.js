import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, tabsToShow } from '../common/tab/tabActions'


const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList(){
    return (dispatch) => {
        const request = axios.get(`${BASE_URL}/billingCycles`)
            .then(resp => dispatch({type: 'BILLING_CYCLES_FETCHED', payload: resp}))
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
    
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return (dispatch) => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Cadastrado com Sucesso')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => {
                    toastr.error('Erro', error)
                });
            })
    }
}

export function showUpdate(billingCycle){
    return [
        tabsToShow('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle){
    return [
        tabsToShow('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init(){
    return [
        tabsToShow('tabList', 'tabCreate'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES),
        selectTab('tabList')
    ]
}