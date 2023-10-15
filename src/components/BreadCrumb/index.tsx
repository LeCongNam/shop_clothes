import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

function BreadCrumb() {
    const breadcrumbs = useBreadcrumbs()
    const [breadcrumbsLength, setBreadcrumbsLength] = useState<number>(0)
    useEffect(() => {
        setBreadcrumbsLength(breadcrumbs.length)
    }, [])

    return (
        <div className="md:mx-[100px] mx-4 flex gap-2 mb-5 ">
            {breadcrumbs.map((data, index) => {
                return (
                    <div
                        key={index}
                        className="flex gap-1 justify-center items-center"
                    >
                        {data.breadcrumb}
                        {index < breadcrumbsLength - 1 ? <FontAwesomeIcon icon={faAngleRight} /> : undefined} 
                    </div>
                )
            })}
        </div>
    )
}

export default BreadCrumb
