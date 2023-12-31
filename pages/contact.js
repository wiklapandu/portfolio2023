import ContactForm from "@/components/contact";
import Section from "@/components/section";
import DefaulTemplate from "@/components/templates/defaults";

export default function Contact()
{
    return <>
    <DefaulTemplate page="contact" themeColor="white">
        <Section sectionType="white">
            <ContactForm/>
        </Section>
    </DefaulTemplate>
    </>
}