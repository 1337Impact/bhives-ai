import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQComponent({
  data,
}: {
  data: { question: string; answer: string }[];
}) {
  return (
    <Accordion type="single" collapsible>
      {data.map(({ question, answer }, index) => (
        <AccordionItem key={index} value={question}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
