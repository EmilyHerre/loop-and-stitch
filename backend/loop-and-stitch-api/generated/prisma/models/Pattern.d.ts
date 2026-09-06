import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatternModel = runtime.Types.Result.DefaultSelection<Prisma.$PatternPayload>;
export type AggregatePattern = {
    _count: PatternCountAggregateOutputType | null;
    _avg: PatternAvgAggregateOutputType | null;
    _sum: PatternSumAggregateOutputType | null;
    _min: PatternMinAggregateOutputType | null;
    _max: PatternMaxAggregateOutputType | null;
};
export type PatternAvgAggregateOutputType = {
    id: number | null;
    estimatedTime: number | null;
};
export type PatternSumAggregateOutputType = {
    id: number | null;
    estimatedTime: number | null;
};
export type PatternMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    category: string | null;
    difficulty: string | null;
    estimatedTime: number | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatternMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    category: string | null;
    difficulty: string | null;
    estimatedTime: number | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatternCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    category: number;
    difficulty: number;
    estimatedTime: number;
    imageUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PatternAvgAggregateInputType = {
    id?: true;
    estimatedTime?: true;
};
export type PatternSumAggregateInputType = {
    id?: true;
    estimatedTime?: true;
};
export type PatternMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    difficulty?: true;
    estimatedTime?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatternMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    difficulty?: true;
    estimatedTime?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatternCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    difficulty?: true;
    estimatedTime?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PatternAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternWhereInput;
    orderBy?: Prisma.PatternOrderByWithRelationInput | Prisma.PatternOrderByWithRelationInput[];
    cursor?: Prisma.PatternWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatternCountAggregateInputType;
    _avg?: PatternAvgAggregateInputType;
    _sum?: PatternSumAggregateInputType;
    _min?: PatternMinAggregateInputType;
    _max?: PatternMaxAggregateInputType;
};
export type GetPatternAggregateType<T extends PatternAggregateArgs> = {
    [P in keyof T & keyof AggregatePattern]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePattern[P]> : Prisma.GetScalarType<T[P], AggregatePattern[P]>;
};
export type PatternGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternWhereInput;
    orderBy?: Prisma.PatternOrderByWithAggregationInput | Prisma.PatternOrderByWithAggregationInput[];
    by: Prisma.PatternScalarFieldEnum[] | Prisma.PatternScalarFieldEnum;
    having?: Prisma.PatternScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatternCountAggregateInputType | true;
    _avg?: PatternAvgAggregateInputType;
    _sum?: PatternSumAggregateInputType;
    _min?: PatternMinAggregateInputType;
    _max?: PatternMaxAggregateInputType;
};
export type PatternGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    category: string;
    difficulty: string;
    estimatedTime: number | null;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PatternCountAggregateOutputType | null;
    _avg: PatternAvgAggregateOutputType | null;
    _sum: PatternSumAggregateOutputType | null;
    _min: PatternMinAggregateOutputType | null;
    _max: PatternMaxAggregateOutputType | null;
};
export type GetPatternGroupByPayload<T extends PatternGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatternGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatternGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatternGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatternGroupByOutputType[P]>;
}>>;
export type PatternWhereInput = {
    AND?: Prisma.PatternWhereInput | Prisma.PatternWhereInput[];
    OR?: Prisma.PatternWhereInput[];
    NOT?: Prisma.PatternWhereInput | Prisma.PatternWhereInput[];
    id?: Prisma.IntFilter<"Pattern"> | number;
    name?: Prisma.StringFilter<"Pattern"> | string;
    description?: Prisma.StringNullableFilter<"Pattern"> | string | null;
    category?: Prisma.StringFilter<"Pattern"> | string;
    difficulty?: Prisma.StringFilter<"Pattern"> | string;
    estimatedTime?: Prisma.IntNullableFilter<"Pattern"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Pattern"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pattern"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pattern"> | Date | string;
    sections?: Prisma.PatternSectionListRelationFilter;
    materials?: Prisma.PatternMaterialListRelationFilter;
};
export type PatternOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sections?: Prisma.PatternSectionOrderByRelationAggregateInput;
    materials?: Prisma.PatternMaterialOrderByRelationAggregateInput;
};
export type PatternWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PatternWhereInput | Prisma.PatternWhereInput[];
    OR?: Prisma.PatternWhereInput[];
    NOT?: Prisma.PatternWhereInput | Prisma.PatternWhereInput[];
    name?: Prisma.StringFilter<"Pattern"> | string;
    description?: Prisma.StringNullableFilter<"Pattern"> | string | null;
    category?: Prisma.StringFilter<"Pattern"> | string;
    difficulty?: Prisma.StringFilter<"Pattern"> | string;
    estimatedTime?: Prisma.IntNullableFilter<"Pattern"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Pattern"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pattern"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pattern"> | Date | string;
    sections?: Prisma.PatternSectionListRelationFilter;
    materials?: Prisma.PatternMaterialListRelationFilter;
}, "id">;
export type PatternOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PatternCountOrderByAggregateInput;
    _avg?: Prisma.PatternAvgOrderByAggregateInput;
    _max?: Prisma.PatternMaxOrderByAggregateInput;
    _min?: Prisma.PatternMinOrderByAggregateInput;
    _sum?: Prisma.PatternSumOrderByAggregateInput;
};
export type PatternScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatternScalarWhereWithAggregatesInput | Prisma.PatternScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatternScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatternScalarWhereWithAggregatesInput | Prisma.PatternScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pattern"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Pattern"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Pattern"> | string | null;
    category?: Prisma.StringWithAggregatesFilter<"Pattern"> | string;
    difficulty?: Prisma.StringWithAggregatesFilter<"Pattern"> | string;
    estimatedTime?: Prisma.IntNullableWithAggregatesFilter<"Pattern"> | number | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Pattern"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Pattern"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Pattern"> | Date | string;
};
export type PatternCreateInput = {
    name: string;
    description?: string | null;
    category: string;
    difficulty: string;
    estimatedTime?: number | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.PatternSectionCreateNestedManyWithoutPatternInput;
    materials?: Prisma.PatternMaterialCreateNestedManyWithoutPatternInput;
};
export type PatternUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    category: string;
    difficulty: string;
    estimatedTime?: number | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.PatternSectionUncheckedCreateNestedManyWithoutPatternInput;
    materials?: Prisma.PatternMaterialUncheckedCreateNestedManyWithoutPatternInput;
};
export type PatternUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.PatternSectionUpdateManyWithoutPatternNestedInput;
    materials?: Prisma.PatternMaterialUpdateManyWithoutPatternNestedInput;
};
export type PatternUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.PatternSectionUncheckedUpdateManyWithoutPatternNestedInput;
    materials?: Prisma.PatternMaterialUncheckedUpdateManyWithoutPatternNestedInput;
};
export type PatternCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    category: string;
    difficulty: string;
    estimatedTime?: number | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatternUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatternUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatternCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedTime?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatternAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estimatedTime?: Prisma.SortOrder;
};
export type PatternMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedTime?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatternMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedTime?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatternSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estimatedTime?: Prisma.SortOrder;
};
export type PatternScalarRelationFilter = {
    is?: Prisma.PatternWhereInput;
    isNot?: Prisma.PatternWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PatternCreateNestedOneWithoutSectionsInput = {
    create?: Prisma.XOR<Prisma.PatternCreateWithoutSectionsInput, Prisma.PatternUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.PatternCreateOrConnectWithoutSectionsInput;
    connect?: Prisma.PatternWhereUniqueInput;
};
export type PatternUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: Prisma.XOR<Prisma.PatternCreateWithoutSectionsInput, Prisma.PatternUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.PatternCreateOrConnectWithoutSectionsInput;
    upsert?: Prisma.PatternUpsertWithoutSectionsInput;
    connect?: Prisma.PatternWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatternUpdateToOneWithWhereWithoutSectionsInput, Prisma.PatternUpdateWithoutSectionsInput>, Prisma.PatternUncheckedUpdateWithoutSectionsInput>;
};
export type PatternCreateNestedOneWithoutMaterialsInput = {
    create?: Prisma.XOR<Prisma.PatternCreateWithoutMaterialsInput, Prisma.PatternUncheckedCreateWithoutMaterialsInput>;
    connectOrCreate?: Prisma.PatternCreateOrConnectWithoutMaterialsInput;
    connect?: Prisma.PatternWhereUniqueInput;
};
export type PatternUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: Prisma.XOR<Prisma.PatternCreateWithoutMaterialsInput, Prisma.PatternUncheckedCreateWithoutMaterialsInput>;
    connectOrCreate?: Prisma.PatternCreateOrConnectWithoutMaterialsInput;
    upsert?: Prisma.PatternUpsertWithoutMaterialsInput;
    connect?: Prisma.PatternWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatternUpdateToOneWithWhereWithoutMaterialsInput, Prisma.PatternUpdateWithoutMaterialsInput>, Prisma.PatternUncheckedUpdateWithoutMaterialsInput>;
};
export type PatternCreateWithoutSectionsInput = {
    name: string;
    description?: string | null;
    category: string;
    difficulty: string;
    estimatedTime?: number | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: Prisma.PatternMaterialCreateNestedManyWithoutPatternInput;
};
export type PatternUncheckedCreateWithoutSectionsInput = {
    id?: number;
    name: string;
    description?: string | null;
    category: string;
    difficulty: string;
    estimatedTime?: number | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: Prisma.PatternMaterialUncheckedCreateNestedManyWithoutPatternInput;
};
export type PatternCreateOrConnectWithoutSectionsInput = {
    where: Prisma.PatternWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternCreateWithoutSectionsInput, Prisma.PatternUncheckedCreateWithoutSectionsInput>;
};
export type PatternUpsertWithoutSectionsInput = {
    update: Prisma.XOR<Prisma.PatternUpdateWithoutSectionsInput, Prisma.PatternUncheckedUpdateWithoutSectionsInput>;
    create: Prisma.XOR<Prisma.PatternCreateWithoutSectionsInput, Prisma.PatternUncheckedCreateWithoutSectionsInput>;
    where?: Prisma.PatternWhereInput;
};
export type PatternUpdateToOneWithWhereWithoutSectionsInput = {
    where?: Prisma.PatternWhereInput;
    data: Prisma.XOR<Prisma.PatternUpdateWithoutSectionsInput, Prisma.PatternUncheckedUpdateWithoutSectionsInput>;
};
export type PatternUpdateWithoutSectionsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materials?: Prisma.PatternMaterialUpdateManyWithoutPatternNestedInput;
};
export type PatternUncheckedUpdateWithoutSectionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materials?: Prisma.PatternMaterialUncheckedUpdateManyWithoutPatternNestedInput;
};
export type PatternCreateWithoutMaterialsInput = {
    name: string;
    description?: string | null;
    category: string;
    difficulty: string;
    estimatedTime?: number | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.PatternSectionCreateNestedManyWithoutPatternInput;
};
export type PatternUncheckedCreateWithoutMaterialsInput = {
    id?: number;
    name: string;
    description?: string | null;
    category: string;
    difficulty: string;
    estimatedTime?: number | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.PatternSectionUncheckedCreateNestedManyWithoutPatternInput;
};
export type PatternCreateOrConnectWithoutMaterialsInput = {
    where: Prisma.PatternWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternCreateWithoutMaterialsInput, Prisma.PatternUncheckedCreateWithoutMaterialsInput>;
};
export type PatternUpsertWithoutMaterialsInput = {
    update: Prisma.XOR<Prisma.PatternUpdateWithoutMaterialsInput, Prisma.PatternUncheckedUpdateWithoutMaterialsInput>;
    create: Prisma.XOR<Prisma.PatternCreateWithoutMaterialsInput, Prisma.PatternUncheckedCreateWithoutMaterialsInput>;
    where?: Prisma.PatternWhereInput;
};
export type PatternUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: Prisma.PatternWhereInput;
    data: Prisma.XOR<Prisma.PatternUpdateWithoutMaterialsInput, Prisma.PatternUncheckedUpdateWithoutMaterialsInput>;
};
export type PatternUpdateWithoutMaterialsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.PatternSectionUpdateManyWithoutPatternNestedInput;
};
export type PatternUncheckedUpdateWithoutMaterialsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    difficulty?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedTime?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.PatternSectionUncheckedUpdateManyWithoutPatternNestedInput;
};
export type PatternCountOutputType = {
    sections: number;
    materials: number;
};
export type PatternCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sections?: boolean | PatternCountOutputTypeCountSectionsArgs;
    materials?: boolean | PatternCountOutputTypeCountMaterialsArgs;
};
export type PatternCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternCountOutputTypeSelect<ExtArgs> | null;
};
export type PatternCountOutputTypeCountSectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternSectionWhereInput;
};
export type PatternCountOutputTypeCountMaterialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternMaterialWhereInput;
};
export type PatternSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    estimatedTime?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sections?: boolean | Prisma.Pattern$sectionsArgs<ExtArgs>;
    materials?: boolean | Prisma.Pattern$materialsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatternCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pattern"]>;
export type PatternSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    estimatedTime?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pattern"]>;
export type PatternSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    estimatedTime?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pattern"]>;
export type PatternSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    estimatedTime?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PatternOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "category" | "difficulty" | "estimatedTime" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["pattern"]>;
export type PatternInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sections?: boolean | Prisma.Pattern$sectionsArgs<ExtArgs>;
    materials?: boolean | Prisma.Pattern$materialsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatternCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PatternIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PatternIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PatternPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pattern";
    objects: {
        sections: Prisma.$PatternSectionPayload<ExtArgs>[];
        materials: Prisma.$PatternMaterialPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        category: string;
        difficulty: string;
        estimatedTime: number | null;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pattern"]>;
    composites: {};
};
export type PatternGetPayload<S extends boolean | null | undefined | PatternDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatternPayload, S>;
export type PatternCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatternFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatternCountAggregateInputType | true;
};
export interface PatternDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pattern'];
        meta: {
            name: 'Pattern';
        };
    };
    findUnique<T extends PatternFindUniqueArgs>(args: Prisma.SelectSubset<T, PatternFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatternFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatternFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatternFindFirstArgs>(args?: Prisma.SelectSubset<T, PatternFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatternFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatternFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatternFindManyArgs>(args?: Prisma.SelectSubset<T, PatternFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatternCreateArgs>(args: Prisma.SelectSubset<T, PatternCreateArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatternCreateManyArgs>(args?: Prisma.SelectSubset<T, PatternCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatternCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatternCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatternDeleteArgs>(args: Prisma.SelectSubset<T, PatternDeleteArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatternUpdateArgs>(args: Prisma.SelectSubset<T, PatternUpdateArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatternDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatternDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatternUpdateManyArgs>(args: Prisma.SelectSubset<T, PatternUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatternUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatternUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatternUpsertArgs>(args: Prisma.SelectSubset<T, PatternUpsertArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatternCountArgs>(args?: Prisma.Subset<T, PatternCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatternCountAggregateOutputType> : number>;
    aggregate<T extends PatternAggregateArgs>(args: Prisma.Subset<T, PatternAggregateArgs>): Prisma.PrismaPromise<GetPatternAggregateType<T>>;
    groupBy<T extends PatternGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatternGroupByArgs['orderBy'];
    } : {
        orderBy?: PatternGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatternGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatternFieldRefs;
}
export interface Prisma__PatternClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sections<T extends Prisma.Pattern$sectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pattern$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materials<T extends Prisma.Pattern$materialsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pattern$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatternFieldRefs {
    readonly id: Prisma.FieldRef<"Pattern", 'Int'>;
    readonly name: Prisma.FieldRef<"Pattern", 'String'>;
    readonly description: Prisma.FieldRef<"Pattern", 'String'>;
    readonly category: Prisma.FieldRef<"Pattern", 'String'>;
    readonly difficulty: Prisma.FieldRef<"Pattern", 'String'>;
    readonly estimatedTime: Prisma.FieldRef<"Pattern", 'Int'>;
    readonly imageUrl: Prisma.FieldRef<"Pattern", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Pattern", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Pattern", 'DateTime'>;
}
export type PatternFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    where: Prisma.PatternWhereUniqueInput;
};
export type PatternFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    where: Prisma.PatternWhereUniqueInput;
};
export type PatternFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    where?: Prisma.PatternWhereInput;
    orderBy?: Prisma.PatternOrderByWithRelationInput | Prisma.PatternOrderByWithRelationInput[];
    cursor?: Prisma.PatternWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternScalarFieldEnum | Prisma.PatternScalarFieldEnum[];
};
export type PatternFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    where?: Prisma.PatternWhereInput;
    orderBy?: Prisma.PatternOrderByWithRelationInput | Prisma.PatternOrderByWithRelationInput[];
    cursor?: Prisma.PatternWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternScalarFieldEnum | Prisma.PatternScalarFieldEnum[];
};
export type PatternFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    where?: Prisma.PatternWhereInput;
    orderBy?: Prisma.PatternOrderByWithRelationInput | Prisma.PatternOrderByWithRelationInput[];
    cursor?: Prisma.PatternWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternScalarFieldEnum | Prisma.PatternScalarFieldEnum[];
};
export type PatternCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternCreateInput, Prisma.PatternUncheckedCreateInput>;
};
export type PatternCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatternCreateManyInput | Prisma.PatternCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatternCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    data: Prisma.PatternCreateManyInput | Prisma.PatternCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatternUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternUpdateInput, Prisma.PatternUncheckedUpdateInput>;
    where: Prisma.PatternWhereUniqueInput;
};
export type PatternUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatternUpdateManyMutationInput, Prisma.PatternUncheckedUpdateManyInput>;
    where?: Prisma.PatternWhereInput;
    limit?: number;
};
export type PatternUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternUpdateManyMutationInput, Prisma.PatternUncheckedUpdateManyInput>;
    where?: Prisma.PatternWhereInput;
    limit?: number;
};
export type PatternUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    where: Prisma.PatternWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternCreateInput, Prisma.PatternUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatternUpdateInput, Prisma.PatternUncheckedUpdateInput>;
};
export type PatternDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
    where: Prisma.PatternWhereUniqueInput;
};
export type PatternDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternWhereInput;
    limit?: number;
};
export type Pattern$sectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where?: Prisma.PatternSectionWhereInput;
    orderBy?: Prisma.PatternSectionOrderByWithRelationInput | Prisma.PatternSectionOrderByWithRelationInput[];
    cursor?: Prisma.PatternSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternSectionScalarFieldEnum | Prisma.PatternSectionScalarFieldEnum[];
};
export type Pattern$materialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where?: Prisma.PatternMaterialWhereInput;
    orderBy?: Prisma.PatternMaterialOrderByWithRelationInput | Prisma.PatternMaterialOrderByWithRelationInput[];
    cursor?: Prisma.PatternMaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternMaterialScalarFieldEnum | Prisma.PatternMaterialScalarFieldEnum[];
};
export type PatternDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSelect<ExtArgs> | null;
    omit?: Prisma.PatternOmit<ExtArgs> | null;
    include?: Prisma.PatternInclude<ExtArgs> | null;
};
