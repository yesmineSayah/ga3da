const Index = () => import('@/components/Factures/Index.vue');
const New = () => import('@/components/Factures/New.vue');
const Edit = () => import('@/components/Factures/Edit.vue');

export default [
    {
        path: '',
        name: "factures",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idFacture/edit',
        component: Edit
    }
]