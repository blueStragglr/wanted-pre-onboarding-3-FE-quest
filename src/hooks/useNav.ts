export const useNav = () => {
    const menus: INav[] = [
        {
            path: "page1",
            name: "page1",
            children: [
                {
                    path: "page1/create",
                    name: "create",
                },
                {
                    path: "page1/delete",
                    name: "delete",
                },
            ],
        },
        {
            path: "page2",
            name: "page2",
        },
        {
            path: "page3",
            name: "page3",
        },
    ];
    return { menus };
};
