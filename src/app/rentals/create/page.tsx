import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import ImageInput from "@/components/form/ImageInput";
import CounterInput from "@/components/form/CounterInput";
import AmenitiesInput from "@/components/form/AmenitiesInput";

function CreateProperty() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Ghana"
              placeHolder="enter your name"
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
              placeHolder="enter your tagline"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          <TextAreaInput
            labelText="description (10-1000 words)"
            name="description"
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput />
            <ImageInput />
          </div>
          <>
            <h3 className="text-lg mt-8 mb-4 font-medium">
              Accommodation Details
            </h3>
            <CounterInput detail="Guests" />
            <CounterInput detail="Bedrooms" />
            <CounterInput detail="Beds" />
            <CounterInput detail="Baths" />
            <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
            <AmenitiesInput />

            <SubmitButton text="create rental" className="mt-12" />
          </>
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProperty;
