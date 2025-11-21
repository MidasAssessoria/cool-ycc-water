import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { bookingSchema, BookingFormData } from "@/lib/validation/booking-schema";
import { usePhoneMask } from "@/hooks/usePhoneMask";
import { ValidationIcon } from "./ValidationIcon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const BookingForm = () => {
  const { formatPhoneNumber, handlePhonePaste, handlePhoneBackspace } = usePhoneMask();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      visitDate: undefined,
      numberOfPeople: "",
      fullName: "",
      phone: "+595 ",
      email: "",
      message: "",
      acceptTerms: false,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Simula processamento
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Removido console.log em produção (Fase 1.1)
      if (process.env.NODE_ENV === 'development') {
        console.log("📅 Dados do Agendamento:", data);
      }
      
      // Toast de sucesso
      toast.success("Agendamento recebido!", {
        description: "Nossa equipe entrará em contato em breve.",
      });
      
      // Reset do formulário
      form.reset({
        visitDate: undefined,
        numberOfPeople: "",
        fullName: "",
        phone: "+595 ",
        email: "",
        message: "",
        acceptTerms: false,
      });
      
      // Scroll to top suavemente
      const bookingSection = document.getElementById("agendar-visita");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (error) {
      toast.error("Erro ao enviar agendamento", {
        description: "Por favor, tente novamente.",
      });
    }
  };

  const onError = () => {
    // Encontra o primeiro campo com erro
    const firstError = Object.keys(form.formState.errors)[0] as keyof BookingFormData;
    
    if (firstError) {
      // Toast informando o erro
      toast.error("Preencha todos os campos obrigatórios", {
        description: "Verifique os campos destacados em vermelho.",
      });
      
      // Aguarda um momento antes de focar e scrollar
      setTimeout(() => {
        // Foca no campo com erro
        form.setFocus(firstError);
        
        // Scroll até o campo com erro
        const element = document.getElementsByName(firstError)[0];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  const messageValue = form.watch("message") || "";
  const isSubmitting = form.formState.isSubmitting;

  return (
    <section 
      id="agendar-visita" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Agende sua Visita
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário e nossa equipe entrará em contato
          </p>
        </div>

        {/* Banner Informativo */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg shadow-sm">
          <p className="text-sm sm:text-base text-blue-900 dark:text-blue-100 leading-relaxed">
            📌 Após o envio, nossa equipe entrará em contato para confirmar 
            sua visita e fornecer mais informações sobre horários disponíveis.
          </p>
        </div>

        {/* Formulário */}
        <Card className="bg-card rounded-xl shadow-lg p-4 sm:p-6">
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit, onError)} 
              className="space-y-6"
              noValidate
            >
              {/* Grid responsivo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Data da Visita */}
                <FormField
                  control={form.control}
                  name="visitDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="relative flex items-center gap-2">
                        Data da Visita *
                        <ValidationIcon name="visitDate" />
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                              aria-label="Selecione a data da visita"
                              aria-required="true"
                              aria-invalid={!!form.formState.errors.visitDate}
                            >
                              {field.value ? (
                                format(field.value, "dd/MM/yyyy")
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date > addDays(new Date(), 90)
                            }
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Escolha uma data entre hoje e 90 dias
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Número de Pessoas */}
                <FormField
                  control={form.control}
                  name="numberOfPeople"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="relative flex items-center gap-2">
                        Número de Pessoas *
                        <ValidationIcon name="numberOfPeople" />
                      </FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            aria-label="Selecione o número de pessoas"
                            aria-required="true"
                            aria-invalid={!!form.formState.errors.numberOfPeople}
                          >
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((num) => (
                            <SelectItem key={num} value={String(num)}>
                              {num} {num === 1 ? "pessoa" : "pessoas"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Quantas pessoas visitarão o parque?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Nome Completo */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="relative flex items-center gap-2">
                        Nome Completo *
                        <ValidationIcon name="fullName" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          {...field}
                          aria-label="Digite seu nome completo"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.fullName}
                        />
                      </FormControl>
                      <FormDescription>
                        Mínimo 3 caracteres
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Telefone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="relative flex items-center gap-2">
                        Telefone *
                        <ValidationIcon name="phone" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+595 XXX XXX XXX"
                          {...field}
                          onChange={(e) => {
                            const formatted = formatPhoneNumber(e.target.value);
                            field.onChange(formatted);
                          }}
                          onPaste={(e) => handlePhonePaste(e, field.onChange)}
                          onKeyDown={(e) => 
                            handlePhoneBackspace(e, field.value, field.onChange)
                          }
                          aria-label="Digite seu telefone"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.phone}
                        />
                      </FormControl>
                      <FormDescription>
                        Formato: +595 XXX XXX XXX
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email (campo único, largura completa) */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="relative flex items-center gap-2">
                      Email (opcional)
                      <ValidationIcon name="email" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        {...field}
                        aria-label="Digite seu email"
                        aria-invalid={!!form.formState.errors.email}
                      />
                    </FormControl>
                    <FormDescription>
                      Deixe seu email para receber confirmação
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Mensagem */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="relative flex items-center gap-2">
                      Mensagem (opcional)
                      <ValidationIcon name="message" />
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Alguma observação ou solicitação especial?"
                        className="resize-none"
                        rows={4}
                        {...field}
                        aria-label="Digite sua mensagem"
                        aria-invalid={!!form.formState.errors.message}
                      />
                    </FormControl>
                    <div className="flex justify-between items-center">
                      <FormDescription>
                        Compartilhe qualquer informação adicional
                      </FormDescription>
                      <span 
                        className={cn(
                          "text-sm",
                          messageValue.length > 500 
                            ? "text-destructive font-semibold" 
                            : "text-muted-foreground"
                        )}
                      >
                        {messageValue.length}/500
                      </span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Checkbox Aceitar Termos */}
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-label="Aceito os termos e condições"
                        aria-required="true"
                        aria-invalid={!!form.formState.errors.acceptTerms}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="relative flex items-center gap-2">
                        Aceito os termos e condições *
                        <ValidationIcon name="acceptTerms" />
                      </FormLabel>
                      <FormDescription>
                        Você concorda com nossa política de privacidade
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Botão Submit */}
              <Button 
                type="submit" 
                className="w-full font-semibold text-base sm:text-lg" 
                size="lg"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Enviando agendamento" : "Enviar agendamento"}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Agendar Visita"
                )}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};
