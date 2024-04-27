import { create } from "zustand";

const useMainPageStore = create((set) => ({
    selectedOption: "count",
    count: "",
    date: "",
    startDate: "",
    endDate: "",
    data: null, // State to store API response
    setSelectedOption: (option) => set({ selectedOption: option }),
    setCount: (value) => set({ count: value }),
    setDate: (value) => set({ date: value }),
    setStartDate: (value) => set({ startDate: value }),
    setEndDate: (value) => set({ endDate: value }),
    fetchData: async (queryParams) => {
        try {
            const response = await fetch(`/apod?${new URLSearchParams(queryParams)}`);
            let data_res = await response.json();
            // if data_res is not array , make it array of one elem
            if (!Array.isArray(data_res)) {
                data_res = [data_res];
            }

            set({ data: data_res });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    },
}));

export default useMainPageStore;
