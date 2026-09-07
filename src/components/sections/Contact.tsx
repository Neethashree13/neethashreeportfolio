import { useState, type FormEvent } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const projectTypes = [
  'Web Development',
  'Full-Stack Application',
  'AI-Powered Application',
  'AI API Integration',
  'Flutter Mobile App',
  'Backend & APIs',
  'Database Design',
  'Website Redesign',
  'Other',
];

interface FormState {
  name: string;
  email: string;
  projectType: string;
  description: string;
  budget: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  description?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: '',
    description: '',
    budget: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) {
      next.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address';
    }
    if (!form.projectType) next.projectType = 'Please select a project type';
    if (!form.description.trim()) {
      next.description = 'Please describe your project';
    } else if (form.description.trim().length < 10) {
      next.description = 'Please provide a bit more detail (at least 10 characters)';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Mailto fallback — opens the user's email client with a pre-filled message
    const subject = `Project Inquiry — ${form.projectType}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
      form.budget ? `Budget: ${form.budget}` : '',
      '',
      'Project Description:',
      form.description,
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoLink = `mailto:neethashree13@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding relative border-t border-ink-900">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container-px mx-auto max-w-8xl relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + email */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 heading-lg text-balance">
                Let's build something useful.
              </h2>
              <p className="mt-4 body-lg">
                Have a project in mind or an idea you want to explore? Send me a
                message and I'll get back to you.
              </p>

              <a
                href="mailto:neethashree13@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink-800 bg-ink-900/40 px-5 py-4 transition-all duration-300 hover:border-accent-500/30 hover:bg-ink-900/60"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-ink-500">
                    Email
                  </span>
                  <span className="text-sm font-medium text-ink-100">
                    neethashree13@gmail.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="reveal">
              {sent ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-accent-500/30 bg-ink-900/40 p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent-400" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-50">
                    Your email client should now be open
                  </h3>
                  <p className="mt-2 text-sm text-ink-400">
                    If it didn't open, you can reach me directly at{' '}
                    <a
                      href="mailto:neethashree13@gmail.com"
                      className="text-accent-400 hover:text-accent-300"
                    >
                      neethashree13@gmail.com
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: '',
                        email: '',
                        projectType: '',
                        description: '',
                        budget: '',
                      });
                    }}
                    className="btn-secondary mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-ink-800 bg-ink-900/30 p-6 sm:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-ink-200"
                      >
                        Name <span className="text-accent-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your name"
                        className="input-field"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-ink-200"
                      >
                        Email <span className="text-accent-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@example.com"
                        className="input-field"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="mt-5">
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-medium text-ink-200"
                    >
                      Project Type <span className="text-accent-400">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={(e) => handleChange('projectType', e.target.value)}
                      className="input-field cursor-pointer"
                      aria-invalid={!!errors.projectType}
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mt-5">
                    <label
                      htmlFor="description"
                      className="mb-2 block text-sm font-medium text-ink-200"
                    >
                      Project Description <span className="text-accent-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      value={form.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      placeholder="Tell me about your project, what you're trying to build, and any key features you need."
                      rows={4}
                      className="input-field resize-none"
                      aria-invalid={!!errors.description}
                    />
                    {errors.description && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="mt-5">
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-ink-200"
                    >
                      Budget <span className="text-ink-500">(optional)</span>
                    </label>
                    <input
                      id="budget"
                      type="text"
                      value={form.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      placeholder="e.g. $1,000 - $5,000"
                      className="input-field"
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="mt-4 text-xs text-ink-500">
                    This will open your email client with a pre-filled message to
                    neethashree13@gmail.com.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
