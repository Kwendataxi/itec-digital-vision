import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  FileText,
  Upload,
  X,
  Calendar as CalendarIcon,
  Send,
  Clock,
  Shield,
  Award,
  Mail,
  Phone,
  ChevronRight,
  Home,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_FILES = 5;
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "application/zip",
];

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  budget: z.string().min(1, "Veuillez sélectionner un budget estimé"),
  description: z
    .string()
    .min(50, "La description doit contenir au moins 50 caractères")
    .max(2000, "La description ne peut pas dépasser 2000 caractères"),
  startDate: z.date().optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  { value: "rh", label: "Ressources Humaines" },
  { value: "genie-civil", label: "Génie Civil & Construction" },
  { value: "technologies", label: "Nouvelles Technologies" },
  { value: "electricite", label: "Électricité & Énergie" },
];

const budgets = [
  { value: "moins-5000", label: "Moins de 5 000 $" },
  { value: "5000-15000", label: "5 000 $ - 15 000 $" },
  { value: "15000-50000", label: "15 000 $ - 50 000 $" },
  { value: "plus-50000", label: "Plus de 50 000 $" },
  { value: "a-definir", label: "À définir" },
];

const benefits = [
  {
    icon: Clock,
    title: "Réponse rapide",
    description: "Nous vous répondons sous 24-48h",
  },
  {
    icon: Shield,
    title: "Confidentialité",
    description: "Vos données sont sécurisées",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Expertise terrain éprouvée",
  },
];

const DemandeDevis = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      description: "",
    },
  });

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateAndAddFiles = useCallback((newFiles: FileList | File[]) => {
    const validFiles: File[] = [];
    const errors: string[] = [];

    Array.from(newFiles).forEach((file) => {
      if (files.length + validFiles.length >= MAX_FILES) {
        errors.push(`Maximum ${MAX_FILES} fichiers autorisés`);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name} dépasse 10MB`);
        return;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        errors.push(`${file.name}: type de fichier non supporté`);
        return;
      }
      validFiles.push(file);
    });

    if (errors.length > 0) {
      toast({
        variant: "destructive",
        title: "Erreur de fichier",
        description: errors.join(", "),
      });
    }

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }
  }, [files.length, toast]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      validateAndAddFiles(e.dataTransfer.files);
    },
    [validateAndAddFiles]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        validateAndAddFiles(e.target.files);
      }
    },
    [validateAndAddFiles]
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form data:", data);
    console.log("Files:", files);

    toast({
      title: "Demande envoyée !",
      description:
        "Nous avons bien reçu votre demande de devis. Nous vous contacterons sous 24-48h.",
    });

    setIsSubmitting(false);
    navigate("/");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                      <Home className="w-4 h-4" />
                      Accueil
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-medium">
                    Demande de Devis
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Formulaire de devis
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Demandez votre{" "}
              <span className="text-gradient">devis gratuit</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Décrivez votre projet et recevez une estimation personnalisée sous
              24-48h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Form */}
            <motion.div
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="shadow-elegant border-0 overflow-hidden">
                <CardContent className="p-6 md:p-8 lg:p-10">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Personal Info */}
                      <motion.div
                        variants={itemVariants}
                        className="grid sm:grid-cols-2 gap-6"
                      >
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom complet *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Votre nom complet"
                                  className="h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="votre@email.com"
                                  className="h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid sm:grid-cols-2 gap-6"
                      >
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Téléphone</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+243 XXX XXX XXX"
                                  className="h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Entreprise</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Nom de votre entreprise"
                                  className="h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      {/* Service & Budget */}
                      <motion.div
                        variants={itemVariants}
                        className="grid sm:grid-cols-2 gap-6"
                      >
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service souhaité *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 rounded-xl">
                                    <SelectValue placeholder="Sélectionnez un service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem
                                      key={service.value}
                                      value={service.value}
                                    >
                                      {service.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget estimé *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 rounded-xl">
                                    <SelectValue placeholder="Sélectionnez un budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {budgets.map((budget) => (
                                    <SelectItem
                                      key={budget.value}
                                      value={budget.value}
                                    >
                                      {budget.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      {/* Start Date */}
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date souhaitée de début</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "h-12 rounded-xl pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP", { locale: fr })
                                      ) : (
                                        <span>Choisir une date (optionnel)</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date()
                                    }
                                    initialFocus
                                    className="p-3 pointer-events-auto"
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      {/* Description */}
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description du projet *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Décrivez votre projet en détail : objectifs, contexte, délais souhaités, contraintes particulières..."
                                  className="min-h-[150px] rounded-xl resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>Minimum 50 caractères</span>
                                <span>{field.value.length}/2000</span>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      {/* File Upload */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Documents joints
                        </label>
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          className={cn(
                            "border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer",
                            isDragging
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 hover:bg-secondary/50"
                          )}
                          onClick={() =>
                            document.getElementById("file-input")?.click()
                          }
                        >
                          <input
                            id="file-input"
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                            onChange={handleFileInput}
                            className="hidden"
                          />
                          <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                          <p className="text-foreground font-medium">
                            Glissez vos fichiers ici ou cliquez pour parcourir
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            PDF, DOC, DOCX, JPG, PNG, ZIP • Max 10MB par fichier
                            • Max 5 fichiers
                          </p>
                        </div>

                        {/* File List */}
                        {files.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {files.map((file, index) => (
                              <motion.div
                                key={`${file.name}-${index}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <FileText className="w-5 h-5 text-primary" />
                                  <div>
                                    <p className="text-sm font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
                                      {file.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                  }}
                                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div variants={itemVariants}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full gradient-primary text-primary-foreground font-semibold shadow-elegant group h-14 rounded-xl text-base"
                          size="lg"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                          ) : (
                            <>
                              Envoyer ma demande
                              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Benefits */}
              <Card className="shadow-card border-border/50 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    Pourquoi nous choisir ?
                  </h3>
                  <div className="space-y-5">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Direct */}
              <Card className="shadow-card border-border/50 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Contact direct
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:infos@itec-sarlu.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm">infos@itec-sarlu.com</span>
                    </a>
                    <a
                      href="tel:+243XXXXXXXXX"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm">+243 XXX XXX XXX</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-card border-0 overflow-hidden gradient-primary">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">
                    Délai de réponse
                  </h3>
                  <p className="text-primary-foreground/80 text-2xl font-bold">
                    24-48h
                  </p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    Jours ouvrés
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemandeDevis;
