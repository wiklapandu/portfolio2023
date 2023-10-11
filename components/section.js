export default function Section({children, sectionType = 'primary'})
{
    return <div className={"w-full section-" + sectionType}>
        <div className="p-5 md:max-w-[1250px] min-h-screen md:pt-[10vh] w-full px-[20px] mx-auto">
            {children}
        </div>
    </div>;
}