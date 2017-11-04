const Index = () => import('@/components/Nights/Index.vue');
const Details = () => import('@/components/Nights/Details.vue');

export default [
    {
        path: '',
        name: "nights",
        component: Index
    },
    {
        path: ':id',
        name: "nightsDetails",
        component: Details
    }
]