export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Awards: {
        Row: {
          awardDescription: string | null
          awardHeader: string
          projectID: string
        }
        Insert: {
          awardDescription?: string | null
          awardHeader: string
          projectID: string
        }
        Update: {
          awardDescription?: string | null
          awardHeader?: string
          projectID?: string
        }
        Relationships: [
          {
            foreignKeyName: "Awards_projectID_fkey"
            columns: ["projectID"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["projectID"]
          }
        ]
      }
      EmployerRecruiter: {
        Row: {
          EmployerID: string
        }
        Insert: {
          EmployerID: string
        }
        Update: {
          EmployerID?: string
        }
        Relationships: [
          {
            foreignKeyName: "EmployerRecruiter_EmployerID_fkey"
            columns: ["EmployerID"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      Features: {
        Row: {
          feature: string
          featureDescription: string | null
          projectID: string
        }
        Insert: {
          feature: string
          featureDescription?: string | null
          projectID: string
        }
        Update: {
          feature?: string
          featureDescription?: string | null
          projectID?: string
        }
        Relationships: [
          {
            foreignKeyName: "Features_projectID_fkey"
            columns: ["projectID"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["projectID"]
          }
        ]
      }
      Fields: {
        Row: {
          field: string
          projectID: string
        }
        Insert: {
          field: string
          projectID: string
        }
        Update: {
          field?: string
          projectID?: string
        }
        Relationships: [
          {
            foreignKeyName: "Fields_projectID_fkey"
            columns: ["projectID"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["projectID"]
          }
        ]
      }
      Offer: {
        Row: {
          created_at: string
          CreatorID: string
          EmployerID: string
          isAccepted: boolean
          jobDescription: string | null
          jobTitle: string
          offerID: number
        }
        Insert: {
          created_at?: string
          CreatorID: string
          EmployerID: string
          isAccepted?: boolean
          jobDescription?: string | null
          jobTitle: string
          offerID?: number
        }
        Update: {
          created_at?: string
          CreatorID?: string
          EmployerID?: string
          isAccepted?: boolean
          jobDescription?: string | null
          jobTitle?: string
          offerID?: number
        }
        Relationships: [
          {
            foreignKeyName: "Offer_CreatorID_fkey"
            columns: ["CreatorID"]
            isOneToOne: false
            referencedRelation: "ProjectCreator"
            referencedColumns: ["CreatorID"]
          },
          {
            foreignKeyName: "Offer_EmployerID_fkey"
            columns: ["EmployerID"]
            isOneToOne: false
            referencedRelation: "EmployerRecruiter"
            referencedColumns: ["EmployerID"]
          }
        ]
      }
      Pictures: {
        Row: {
          created_at: string
          picture: string
          projectID: string
        }
        Insert: {
          created_at?: string
          picture: string
          projectID: string
        }
        Update: {
          created_at?: string
          picture?: string
          projectID?: string
        }
        Relationships: [
          {
            foreignKeyName: "Pictures_projectID_fkey"
            columns: ["projectID"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["projectID"]
          }
        ]
      }
      profiles: {
        Row: {
          acadimic_level: string | null
          avatar_url: string | null
          full_name: string | null
          id: string
          isAuthorized: boolean
          major: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          acadimic_level?: string | null
          avatar_url?: string | null
          full_name?: string | null
          id: string
          isAuthorized?: boolean
          major?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          acadimic_level?: string | null
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          isAuthorized?: boolean
          major?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Project: {
        Row: {
          created_at: string
          CreatorID: string
          findMoreURL: string | null
          motivation: string | null
          problem: string
          projectID: string
          solution: string
          title: string
        }
        Insert: {
          created_at?: string
          CreatorID: string
          findMoreURL?: string | null
          motivation?: string | null
          problem: string
          projectID: string
          solution: string
          title: string
        }
        Update: {
          created_at?: string
          CreatorID?: string
          findMoreURL?: string | null
          motivation?: string | null
          problem?: string
          projectID?: string
          solution?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "Project_CreatorID_fkey"
            columns: ["CreatorID"]
            isOneToOne: false
            referencedRelation: "ProjectCreator"
            referencedColumns: ["CreatorID"]
          }
        ]
      }
      ProjectCreator: {
        Row: {
          CreatorID: string
        }
        Insert: {
          CreatorID: string
        }
        Update: {
          CreatorID?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProjectCreator_CreatorID_fkey"
            columns: ["CreatorID"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      Ratings: {
        Row: {
          comment: string | null
          created_at: string
          projectID: string
          rate: number
          UserID: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          projectID: string
          rate: number
          UserID: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          projectID?: string
          rate?: number
          UserID?: string
        }
        Relationships: [
          {
            foreignKeyName: "Ratings_projectID_fkey"
            columns: ["projectID"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["projectID"]
          },
          {
            foreignKeyName: "Ratings_UserID_fkey"
            columns: ["UserID"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      TeamMembers: {
        Row: {
          created_at: string
          LinkedIn: string | null
          name: string
          photo: string | null
          projectID: string
          Twitter: string | null
        }
        Insert: {
          created_at?: string
          LinkedIn?: string | null
          name: string
          photo?: string | null
          projectID: string
          Twitter?: string | null
        }
        Update: {
          created_at?: string
          LinkedIn?: string | null
          name?: string
          photo?: string | null
          projectID?: string
          Twitter?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TeamMembers_projectID_fkey"
            columns: ["projectID"]
            isOneToOne: true
            referencedRelation: "Project"
            referencedColumns: ["projectID"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
