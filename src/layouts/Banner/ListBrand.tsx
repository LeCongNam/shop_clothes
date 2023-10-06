import versace from '../../assets/list-brands/versace.svg';
import zara from '../../assets/list-brands/zara.svg';
import gucci from '../../assets/list-brands/gucci.svg';
import prada from '../../assets/list-brands/prada.svg';
import calvin from '../../assets/list-brands/calvin.svg';

interface BrandItem {
    srcTarget: string;
    name: string;
}

function ListBrand() {
    const listBrands: BrandItem[] = [
        {
            name: versace + '.svg',
            srcTarget: versace,
        },
        {
            name: zara + '.svg',
            srcTarget: zara,
        },
        {
            name: gucci + '.svg',
            srcTarget: gucci,
        },
        {
            name: prada + '.svg',
            srcTarget: prada,
        },
        {
            name: calvin + '.svg',
            srcTarget: calvin,
        },
    ];

    return (
        <div className="bg-black flex gap-8 flex-wrap justify-center md:justify-between py-10 px-4 md:px-[100px]">
            {listBrands.map((item: BrandItem) => (
                <img
                    src={item.srcTarget}
                    alt={item.name}
                    key={item.name}
                    className=""
                />
            ))}
        </div>
    );
}

export default ListBrand;
