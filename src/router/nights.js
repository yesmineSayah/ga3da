const Index = () => import('@/components/Nights/Index.vue');
const New = () => import('@/components/Nights/New.vue');
const Edit = () => import('@/components/Nights/Edit.vue');

export default [
    {
        path: '',
        name: "nights",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idNight/edit',
        component: Edit
    }
]