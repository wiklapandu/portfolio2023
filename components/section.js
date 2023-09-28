export default function Section({children, sectionType = 'primary'})
{
    return <div className={"w-full section-" + sectionType}>
        <div className="p-5 md:max-w-[1250px] min-h-[100vh]  pt-[15vh] w-full px-[20px] mx-auto">
            {children}
        </div>
    </div>;
}