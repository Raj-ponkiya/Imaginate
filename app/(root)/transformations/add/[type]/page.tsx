import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'


const AddTransformationTypePage = async ({params:{type}}:
  SearchParamProps
) => {

  const transformation=transformationTypes[type];
  
  return ( 
    <>
      <Header title={transformation.title} 
       subtitle={transformation.subTitle}
       />

      <TransformationForm action={'Add'} userId={''} type={'restore'} creditBalance={0} />
       

       
    </>
  )
}


export default AddTransformationTypePage
