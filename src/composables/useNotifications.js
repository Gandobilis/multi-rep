import {computed, ref} from "vue"

const useNotifications = () => {
    const general = ref([
        {
            username: 'ვახო ბარათაშვილმა',
            reaction_type: 'like',
            listing_id: '0'
        },
        {
            username: 'ლაშა გაგნიძემ',
            reaction_type: 'rate',
            listing_id: '1'
        },
    ])

    const history = ref([
        {
            title: 'ჯავას ახალი კურსი',
            expiration_date: '1 კვირა'
        },
        {
            title: 'ჯავას საუკეთესო კურსი',
            expiration_date: '1 თვე'
        }
    ])

    const notificationFilters = ref([
        '', 'ყველა', 'ზოგადი', 'გადახდების ისტორია', ''
    ])

    let notificationFilterType = ref('ყველა')

    const filterListings = (type) => {
        notificationFilterType.value = type
    }

    return {notificationFilters, general, history, notificationFilterType, filterListings}
}

export default useNotifications