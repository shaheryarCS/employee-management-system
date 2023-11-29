class EmployeeQuery {
    /**
     * add
     */

    public get(query:any) {
        const {skip,limit,minimumExp,maximumExp,minimumSalary,maximumSalary} = query
        const searchQuery:any = {
        };
        if (minimumExp || maximumExp) {
            const minDate = new Date();
            const maxDate = new Date();

            if (minimumExp) minDate.setFullYear( minDate.getFullYear() - minimumExp);
            if (maximumExp) maxDate.setFullYear( maxDate.getFullYear() - maximumExp);
            console.log("======{$gte: minDate,$lte:new Date()}",{$lte: minDate,$gte:maxDate});


            searchQuery.joiningDate = {...(minimumExp && {$lte: minDate}),...(maximumExp && {$gte:maxDate})}
        }

        if (minimumSalary || maximumSalary) {
            searchQuery.salary = {...(minimumSalary && {$gte: Number( minimumSalary)}),...(maximumSalary && {$lte:Number( maximumSalary)})}
        }
        let aggregateQuery:any;
        console.log("======searchQuery",searchQuery);
        
        aggregateQuery = [
            {
                $match:{...searchQuery}
            },
            {
                $skip:Number(skip)
            },
            {
                $limit:Number(limit)
            }
        ];

        return aggregateQuery
    }
}

export const employeeQuery = new EmployeeQuery();