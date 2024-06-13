import { Button } from '@/components/ui/components/button/button'
import { FileUpload } from '@/components/ui/components/file-upload'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/components/form/form'
import { Input } from '@/components/ui/components/input/input'
import { MaskedInput } from '@/components/ui/components/input/input-masked'
import { Textarea } from '@/components/ui/components/input/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { usePetsSpecifications } from '@/hooks/usePetsSpecifications'
import { api } from '@/lib/axios'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import z from 'zod'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]
const IMAGE_UPLOAD_ENABLED = true

const schema = z.object({
  name: z.string(),
  description: z.string().min(5, 'Descrição é obrigatória'),
  age: z
    .number()
    .int('Selecione a idade do pet')
    .positive('Selecione a idade do pet'),
  species: z.string().min(1, 'Especie é obrigatória'),
  port: z.string().min(1, 'Porte é obrigatório'),
  race: z.string(), // .min(1, 'Raça é obrigatória'),
  color: z.string().min(1, 'Raça é obrigatória'),
  pictures: z
    .array(z.any())
    .refine(
      (files) => (IMAGE_UPLOAD_ENABLED ? files?.length > 0 : true),
      'Selecione uma imagem.',
    )
    .refine((files) => {
      if (files.length > 5) return false
      return true
    }, 'Selecione no máximo 5 imagens.')
    .refine((files) => {
      for (let i = 0; i < files.length; i++) {
        if (!ACCEPTED_IMAGE_TYPES.includes(files[i].type)) return false
      }
      return true
    }, 'Selecione um formato de imagem válido.')
    .refine((files) => {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > MAX_FILE_SIZE) return false
      }
      return true
    }, 'Imagem muito grande.'),

  tutor: z.object({
    name: z.string().min(2, 'Nome é obrigatório'),
    phone: z
      .string()
      .min(11, 'Telefone é obrigatório')
      .refine(
        (phone) => phone.replace(/\D+/g, '').length === 11,
        'Telefone é inválido.',
      ),
  }),
})

type FormProps = z.infer<typeof schema>

export default function RegisterPetForm() {
  const navigate = useNavigate()

  const { data: specifications, isFetching: isLoadingSpecifications } =
    usePetsSpecifications()
  const form = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      description: '',
      age: 1,
      tutor: {
        name: '',
        phone: '',
      },
      port: '',
      race: '',
      species: '',
      color: '',
      pictures: [],
    },
  })

  const handleSubmit = useCallback<SubmitHandler<FormProps>>(
    async (values) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const responsibleResponse = await api.post<{
          id: number
        }>('/responsibles', {
          name: values.tutor.name,
          cellphone: values.tutor.phone.replace(/\D+/g, ''),
        })

        await api.post<{
          id: number
        }>('/animals', {
          name: values.name,
          description: values.description,
          age: values.age,
          size_id: Number(values.port),
          specie_id: Number(values.species),
          color_id: Number(values.color),
          responsible_id: responsibleResponse.data.id,

          ...(values.race.length > 0 && {
            race_id: Number(values.race),
          }),
        })

        toast.success('Pet cadastrado com sucesso!')

        navigate('/sucesso')
      } catch (error) {
        toast.error('Erro ao cadastrar pet.')
      }
    },
    [navigate],
  )

  return (
    <Form {...form}>
      <form
        className="flex-1 space-y-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div>
          <h2 className="mb-3 text-center text-lg font-semibold text-primary lg:text-left lg:text-2xl">
            Informações do pet
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="species"
              render={({ field }) => (
                <FormItem>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoadingSpecifications}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Opção 1" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {specifications.species.map((petSpecie) => (
                        <SelectItem
                          key={'petSpecie'.concat(petSpecie.value)}
                          value={petSpecie.value}
                        >
                          {petSpecie.label}
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
              name="port"
              render={({ field }) => (
                <FormItem>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoadingSpecifications}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a cor" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {specifications.sizes.map((petSize) => (
                        <SelectItem
                          key={'petSize'.concat(petSize.value)}
                          value={petSize.value}
                        >
                          {petSize.label}
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
              name="race"
              render={({ field }) => (
                <FormItem>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoadingSpecifications}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a raça" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {specifications.races.map((petRace) => (
                        <SelectItem
                          key={'petRace'.concat(petRace.value)}
                          value={petRace.value}
                        >
                          {petRace.label}
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
              name="color"
              render={({ field }) => (
                <FormItem>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoadingSpecifications}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o porte" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {specifications.colors.map((petColor) => (
                        <SelectItem
                          key={'petColor'.concat(petColor.value)}
                          value={petColor.value}
                        >
                          {petColor.label}
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
              name="description"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-32 placeholder:text-muted-foreground/60"
                      placeholder="Adicone uma descrição (opcional)"
                      disabled={isLoadingSpecifications}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {IMAGE_UPLOAD_ENABLED && (
          <div>
            <h2 className="mb-3 text-center text-lg font-semibold text-primary lg:text-left lg:text-2xl">
              Galeria de imagens
            </h2>

            <FormField
              control={form.control}
              name="pictures"
              render={({ field, fieldState }) => (
                <FormItem className="lg:col-span-2">
                  <FormControl>
                    <FileUpload
                      id="pictures"
                      onChange={field.onChange}
                      maxFiles={5}
                      multiple
                      value={field.value}
                      onError={(error) => {
                        toast.error(error)
                      }}
                      error={fieldState.error?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <div>
          <h2 className="mb-3 text-center text-lg font-semibold text-primary lg:text-left lg:text-2xl">
            Informações do tutor
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="tutor.name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="placeholder:text-muted-foreground/60"
                      placeholder="Tutor da Silva"
                      disabled={isLoadingSpecifications}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tutor.phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MaskedInput
                      {...field}
                      className="placeholder:text-muted-foreground/60"
                      placeholder="Telefone para contato"
                      disabled={isLoadingSpecifications}
                      mask={{
                        mask: '(00) 0 0000-0000',
                        lazy: false,
                      }}
                      onAccept={(value) => {
                        form.setValue('tutor.phone', value)
                        if (value.replace(/\D+/g, '').length >= 10) {
                          form.trigger('tutor.phone')
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          className="flex w-full lg:max-w-64"
          type="submit"
          disabled={form.formState.isSubmitting || isLoadingSpecifications}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader className="mr-2 size-4 animate-spin" /> Enviando...
            </>
          ) : (
            'Cadastrar'
          )}
        </Button>
      </form>
    </Form>
  )
}
