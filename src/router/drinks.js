const Index = () => import('@/components/Drinks/Index.vue');
const New = () => import('@/components/Drinks/New.vue');
const Edit = () => import('@/components/Drinks/Edit.vue');

export default [
    {
        path: '',
        name: "drinks",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idDrink/edit',
        component: Edit
    }
]