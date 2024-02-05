import { ref } from "vue";
import { markRaw } from 'vue';
import person from "../assets/icons/SearchResults/person.vue"
import statement from "../assets/icons/SearchResults/statement.vue"
import perso from "../assets/icons/SearchResults/perso.vue"
import star from "../assets/icons/SearchResults/star.vue"


export default (function useSearchResults() {
    const SearchResultsInfo = ref([
        {
            SearchResults: {
                title: "ძებნის შედეგები",
                personsvg: markRaw(person),
                statementsvg: markRaw(statement),
                statement:"განცხადებები",
                numb:"8",
                numb1:"0",
                person:"მასწავლებლები",
                title2:"დალაგება",
                filtertitle1:"ფასით",
                filtertitle2:"მისამართით",
                filtertitle3:"დისტანციურად",
                filtertitle4:"პოპულარობით",
                choose:"ქალაქი",
                city:"ჭიათურა",
                city1:"საჩხერე",
                city2:"თბილისი",
                city3:"ქუთაისი",
                persosvg: markRaw(perso),
                starsvg: markRaw(star),
                title3:"ჯავას ახალი კურსი",
                rating:"4.9",
                money:"300 ₾",
                compensation:"თვიურად",
                date:"7 იან. 16:31",
                personal:"გიორგი გიორგაძე",
                number:"(+995) 599-111-222",
            },
        },
        
    ]);


    let instance = { SearchResultsInfo,  };

    return () => {
        return instance;
    };
})();