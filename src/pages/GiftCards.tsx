import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  type: z.enum(["digital", "physical"]),
  amount: z.enum(["500", "1000", "2000", "5000"]),
  recipientName: z.string().min(2, "Recipient name is required"),
  recipientEmail: z.string().email("Valid email required").optional(),
  message: z.string().max(200).optional(),
});

type FormValues = z.infer<typeof schema>;

const GiftCards = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "digital",
      amount: "1000",
      recipientName: "",
      recipientEmail: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Gift card request:", values);
    toast({
      title: "Gift card",
      description: "Thanks! Gift card purchase will be available soon.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Gift Cards | Vinayak Supermarket Hazira</title>
        <meta name="description" content="Buy digital or physical gift cards from Vinayak Supermarket. Choose an amount and add recipient details." />
        <link rel="canonical" href="/gift-cards" />
      </Helmet>

      <main className="container py-8">
        <h1 className="text-2xl font-semibold mb-6">Gift Cards</h1>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          Purchase a Vinayak gift card for friends and family. Choose digital (email delivery) or physical (pick up in store).
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 max-w-xl">
          <div className="grid gap-2">
            <Label>Type</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button type="button" variant={form.watch("type") === "digital" ? "default" : "secondary"} onClick={() => form.setValue("type", "digital")}>Digital</Button>
              <Button type="button" variant={form.watch("type") === "physical" ? "default" : "secondary"} onClick={() => form.setValue("type", "physical")}>Physical</Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Select value={form.watch("amount")} onValueChange={(v) => form.setValue("amount", v as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Select amount" />
              </SelectTrigger>
              <SelectContent>
                {(["500","1000","2000","5000"]).map((amt) => (
                  <SelectItem key={amt} value={amt}>₹{amt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="recipientName">Recipient Name</Label>
            <Input id="recipientName" {...form.register("recipientName")} />
            {form.formState.errors.recipientName && (
              <span className="text-sm text-destructive">
                {form.formState.errors.recipientName.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="recipientEmail">Recipient Email (for digital)</Label>
            <Input id="recipientEmail" type="email" placeholder="name@example.com" {...form.register("recipientEmail")} />
            {form.formState.errors.recipientEmail && (
              <span className="text-sm text-destructive">
                {form.formState.errors.recipientEmail.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message (optional)</Label>
            <Textarea id="message" rows={4} placeholder="Add a note" {...form.register("message")} />
          </div>

          <Button type="submit" className="w-fit">Continue</Button>
        </form>
      </main>
    </>
  );
};

export default GiftCards;
